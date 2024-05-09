import { Container } from "@/components/container";
import Categories from "./_components/categories";
import { useCurrentRole } from "@/hooks/use-current-role";
import { Role } from "@prisma/client";
import { currentRole } from "@/lib/auth";

interface RoleGateProps {
	children: React.ReactNode;
	allowedRole: Role;
}

export default async function DonorLayout({
	children,
	allowedRole,
}: RoleGateProps) {
	const role = await currentRole();
	if (role !== Role.DONOR) {
		return <div>Error: Access denied</div>;
	}

	return (
		<Container>
			<Categories />
			<div className="mt-8">{children}</div>
		</Container>
	);
}
