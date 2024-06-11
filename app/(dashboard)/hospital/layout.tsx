import { Container } from "@/components/container";

import { Role } from "@prisma/client";
import { currentRole } from "@/lib/auth";
import Categories from "./_components/categories";
import { SessionProvider } from "next-auth/react";

interface RoleGateProps {
	children: React.ReactNode;
}

export default async function DonorLayout({ children }: RoleGateProps) {
	const role = await currentRole();
	if (role !== Role.HOSPITAL) {
		return <div>Error: Access denied</div>;
	}

	return (
		<SessionProvider>
			<Container className="max-w-full">
				<Categories />
				<div className="">{children}</div>
			</Container>
		</SessionProvider>
	);
}
