"use server";

import { donorSchema, hospitalSchema } from "@/schema";
import { z } from "zod";

export const registerDonor = async (values: z.infer<typeof donorSchema>) => {
	const validatedFields = donorSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}
	return {
		success: " ✅ you've successfully logged in",
	};
};

export const registerHospital = async (values: z.infer<typeof hospitalSchema>) => {
	const validatedFields = hospitalSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}
	return {
		success: " ✅ you've successfully logged in",
	};
};
