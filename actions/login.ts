"use server";

import { signIn } from "@/auth";
import { DEFAULT_REDIRECT } from "@/routes";
import { loginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { z } from "zod";
import { getUserByEmail } from "@/lib/user";

export const login = async (values: z.infer<typeof loginSchema>) => {
	const validatedFields = loginSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}

	const { email, password } = validatedFields.data;

	try {


		
		const user =  await getUserByEmail(email);
		const Role = user?.role.toLowerCase();

		const mainPagePath = Role ? `/${Role}` : '/';

		await signIn("credentials", {
			email,
			password,
			redirectTo: mainPagePath,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return {
						error: " ❌ invalid credentials",
					};
				default:
					return {
						error: " ❌ something went wrong",
					};
			}
		}
		throw error;
	}
	return {
		success: " ✅ you've successfully logged in",
	};
};
