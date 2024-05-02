"use server";

import { loginSchema } from "@/schema";
import { z } from "zod";

export const login = async(values: z.infer<typeof loginSchema>) => {
	const validatedFields = loginSchema.safeParse(values);

	if (!validatedFields.success) {
		return {	
			error: " ❌ please provide valid credentials",
		};

	}
	return {
		success: " ✅ you've successfully logged in",
	};
};
