import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Eterna Care Medical Institute",
	description: "A platform to connect blood donors with those in need.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={Mont.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
