import { auth } from "@/auth";
import Logo from "@/components/Logo";
import { SessionProvider, signOut } from "next-auth/react";
import Link from "next/link";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<SessionProvider>
			<div>
				<header className="flex w-full justify-between border-b  py-2 items-center mx-8">
					<div className="flex-row items-center justify-center ">
						<Link
							href="/"
							className="flex items-center gap-2 text-lg font-semibold"
						>
							<Logo size={32} />
							RedCell Reserver
						</Link> 
						<span className="m-10 font-semibold ">{session?.user.role}</span>
					</div>
				</header>
				<div className="mt-8">{children}</div>
			</div>
		</SessionProvider>
	);
}
