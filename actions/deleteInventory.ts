"use server";

import { db } from "@/lib/db";
import { z } from "zod";

const deleteInventorySchema = z.object({
	id: z.string(),
});

export default async function deleteInventory(
	values: z.infer<typeof deleteInventorySchema>
) {
	try {
		await db.inventory.delete({
			where: {
				id: values.id,
			},
		});
		return { success: "Inventory entry deleted successfully." };
	} catch (error) {
		console.error("Error in deleteInventory:", error);
		return { error: "An error occurred while processing your request." };
	}
}
