"use server";
import { db } from "@/lib/db";
import { inventorySchema } from "@/schema";
import { InventoryType, Prisma } from "@prisma/client";
import { z } from "zod";
import { getHospital, getDonor } from "@/lib/inventory";
import { auth } from "@/auth";

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

		const organizationId = user?.organization?.userId;
		if (!organizationId) {
			return { error: "Organization ID is missing in session" };
		}

		let hospitalId: string | undefined;
		let donorId: string | undefined;

		if (inventoryType === InventoryType.OUT) {
			const hospital = await getHospital(email);
			if (!hospital) {
				return { error: "Hospital email not found" };
			}
			hospitalId = hospital.id;
		} else if (inventoryType === InventoryType.IN) {
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
						hospitalId:
							inventoryType === InventoryType.OUT ? hospitalId : undefined,
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
