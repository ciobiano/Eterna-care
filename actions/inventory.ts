"use server";
import { db } from "@/lib/db";
import { inventorySchema } from "@/schema";
import { InventoryType, Prisma } from "@prisma/client";
import { z } from "zod";
import { getLaboratory, getDonor } from "@/lib/inventory";
import { auth } from "@/auth";

async function getInventoryTotals(
	organizationId: string,
	inventoryType: InventoryType
) {
	return db.inventory.groupBy({
		by: ["bloodGroup"],
		where: { organizationId, inventoryType },
		_sum: { quantity: true },
	});
}

async function getInventoryTotalByBloodGroup(
	organizationId: string,
	inventoryType: InventoryType,
	bloodGroup: string
) {
	const totals = await getInventoryTotals(organizationId, inventoryType);
	const totalForGroup = totals.find((group) => group.bloodGroup === bloodGroup);


	return totalForGroup?._sum.quantity || 0; // Return 0 if not found
}

export default async function InventoryInput(
	values: z.infer<typeof inventorySchema>
) {
	const validatedFields = inventorySchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid input data." };
	}

	const { inventoryType, quantity, bloodGroup, email } = validatedFields.data;

	try {
		const session = await auth();

		const userId = session?.user.id;

		const user = await db.user.findUnique({
			where: {
				id: userId,
			},
			include: { organization: true },
		});

		if (!user || !user.organization) {
			return { error: "User or organization not found." };
		}

		const organizationId = user?.organization?.id;

		let laboratoryId: string | undefined;
		let donorId: string | undefined;

		const totalIn = await getInventoryTotalByBloodGroup(
			organizationId,
			InventoryType.IN,
			bloodGroup
		);
		const totalOut = await getInventoryTotalByBloodGroup(
			organizationId,
			InventoryType.OUT,
			bloodGroup
		);

		const availableQuantity = totalIn - totalOut;

		if (inventoryType === "OUT") {
			if (availableQuantity < quantity) {
				return {
					error: ` ${availableQuantity} units of ${bloodGroup} blood available.`,
				};
			}
			const laboratory = await getLaboratory(email);
			if (!laboratory) {
				return { error: "Laboratory email not found" };
			}
			laboratoryId = laboratory.id;
		} else if (inventoryType === "IN") {
			const donor = await getDonor(email);
			if (!donor) {
				return { error: "Donor email not found" };
			}
			donorId = donor.id;
		}

		// Transaction handling
		const result = await db.$transaction(
			async (prisma: Prisma.TransactionClient) => {
				const inventory = await prisma.inventory.create({
					data: {
						inventoryType,
						quantity,
						bloodGroup,
						email,
						organizationId,
						donorId: inventoryType === InventoryType.IN ? donorId : undefined,
						laboratoryId:
							inventoryType === InventoryType.OUT ? laboratoryId : undefined,
					},
				});
				return inventory;
			}
		);

		return { success: "Inventory entry created successfully." };
	} catch (error) {
		return { error: "An error occurred while processing your request." };
	}
}
