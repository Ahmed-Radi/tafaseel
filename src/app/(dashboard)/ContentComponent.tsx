"use client";
import Sidebar from "@/components/sidebar/sidebar";
import { SidebarContext } from "@/store/sidebarContext/sidebarContext";
import { Box, Container } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { useMediaQuery, useIsClient } from "usehooks-ts";
import DashboardNavbar from "@/components/dashboard/navbar/DashboardNavbar";
import styles from "./dashboardLayout.module.scss";
import BreadcrumbsSection from "@/components/dashboard/breadcrumbsSection/breadcrumbsSection";

function ContentComponent({ children }: { children: ReactNode }) {
	const { layout_container, chakra_container, layout_content, close } =
		styles;

	// this temporary solution until using 'suppressHydrationWarning={true}'
	const isClient = useIsClient();
	const { isOpen, toggleSidebar } = useContext(SidebarContext);
	const isSmallDevice: boolean = useMediaQuery("(max-width : 1199px)");

	if (isClient === false) return "Loading...";

	return (
		<div className={`${layout_container} ${isOpen ? "" : close}`}>
			{isOpen && (
        // this box used to close sidebar in small screen
				<Box
					as={"div"}
					onClick={toggleSidebar}
					height={"100vh"}
					width={"100vw"}
					display={{
						base: "block",
						md: "none", // OR lg: "none",
					}}
					position={"absolute"}
					inset={0}></Box>
			)}
			<Container maxW={"container"} className={chakra_container}>
				<DashboardNavbar isSmallDevice={isSmallDevice} />
        <BreadcrumbsSection />
				<div className={layout_content}>{children}</div>
			</Container>
			<Sidebar isSmallDevice={isSmallDevice} />
		</div>
	);
}

export default ContentComponent;
