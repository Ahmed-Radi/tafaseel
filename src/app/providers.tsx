"use client";

import { PopupProvider } from "@/store/popupContext/popupContext";
import { SidebarProvider } from "@/store/sidebarContext/sidebarContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ChakraProvider>
			<PopupProvider>
				<SidebarProvider>{children}</SidebarProvider>
			</PopupProvider>
		</ChakraProvider>
	);
}
