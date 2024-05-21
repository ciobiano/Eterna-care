"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getInventories = async () => {
	const session = await auth();

	const id = session?.user.id;

	if (!id) {
		throw new Error("Access denied");
	}

	console.log(id);

	try {
		const inventories = await db.inventory.findMany({
			where: {
				organizationId: id,
			},
		});
		return inventories;
	} catch (error) {
		throw new Error("Failed to fetch inventory data.");
	}
};
