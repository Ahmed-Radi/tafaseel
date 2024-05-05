import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.scss";
import { Providers } from "./providers";
import TopNavbar from "@/components/topNavbar/TopNavbar";
import Navbar from "@/components/navbar/Navbar";

const inter = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "karzoun",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<TopNavbar />
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
