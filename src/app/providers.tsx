"use client";

import { SidebarProvider } from "@/store/sidebarContext/sidebarContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider>
			<SidebarProvider>{children}</SidebarProvider>
		</ChakraProvider>
	);
}
