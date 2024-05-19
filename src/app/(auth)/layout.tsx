import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "../../app/globals.scss";
import { Providers } from "../providers";

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: "tafaseel",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cairo.className}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}