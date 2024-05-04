import { auth } from "@/auth";
import {
	apiAuthPrefix,
	authRoutes,
	DEFAULT_REDIRECT,
	publicRoutes,
} from "@/routes";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";


export const { auth: middleware } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return NextResponse.next();
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return NextResponse.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
		}

		return NextResponse.next();
	}

	if (!isLoggedIn && !isPublicRoute) {
		return NextResponse.redirect(new URL("/login", nextUrl));
	}
});

// Stop Middleware running on static files
export const config = {
	matcher: ["/((?!_next/image|_next/static|favicon.ico).*)", "/"],
};
