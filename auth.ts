import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/auth.config";
import { db } from "./lib/db";
import { getUserById } from "@/lib/user";
import { Role } from "@prisma/client";

declare module "next-auth" {
		interface Session {
		user: {
			role: Role
		} & DefaultSession["user"];
	}
}
 


export const { handlers, auth, signIn, signOut } = NextAuth({
	callbacks: {
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);
			if (!existingUser) return token;

			token.role = existingUser.role;

			return token;
		},
		async session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as Role;
			}

			console.log({ sessionToken: token, session });
			return session;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
