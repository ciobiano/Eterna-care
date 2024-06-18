import { Container } from "@/components/container";
import Categories from "./_components/categories";

import { Role } from "@prisma/client";
import { currentRole } from "@/lib/auth";

export default async function DonorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const role = await currentRole();
	if (role !== Role.DONOR) {
		return <div>Error: Access denied</div>;
	}

	return (
		
		<Container className="max-w-full">
			<Categories />
			<div className="">{children}</div>
		</Container>
	);
}
