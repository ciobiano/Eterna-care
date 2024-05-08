
import { Container } from "@/components/container";
import Categories from "./_components/categories";

export default async function DonorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Container>
			<Categories />
			<div className="mt-8">{children}</div>
		</Container>
	);
}
