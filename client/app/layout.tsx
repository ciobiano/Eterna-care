import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Redcell Reserve",
	description: "A platform to connect blood donors with those in need.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={Mont.className}>{children}</body>
		</html>
	);
}
