import { auth } from "@/auth";
import { Container } from "@/components/container";
import Logo from "@/components/Logo";
import UserButton from "@/components/NavBar/userButton";
import { SessionProvider, signOut } from "next-auth/react";
import Link from "next/link";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<Container>
				<header className="flex justify-between border-b  py-4 items-center  ">
					<div className="flex items-center justify-center space-x-2 ">
						<Logo size={40} />
						<Link
							href="/"
							className="flex-row cursor-pointer items-center gap-2 text-base font-semibold"
						>
							RedCell Reserver
							<span className="flex  font-semibold text-xs ">
								{session?.user.role}
							</span>
						</Link>
					</div>
					<UserButton />
				</header>

				{children}
			</Container>
		</SessionProvider>
	);
}
