import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "./schema";
import { getUserByEmail } from "./lib/user";
import bcrypt from "bcryptjs";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedField = loginSchema.safeParse(credentials);
				if (validatedField.success) {
					const { email, password } = validatedField.data;
					const user = await getUserByEmail(email);
					if (!user) {
						return null;
					}

					const passwordMatch = await bcrypt.compare(password, user.password);
					if (passwordMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
