"use client";

import { Box, Container, Flex } from "@chakra-ui/react";
import styles from "./dashboardNavbar.module.scss";
import { IDashboardNavbar } from "@/types/dashboard/Navbar";
import { useContext } from "react";
import { SidebarContext } from "@/store/sidebarContext/sidebarContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaObjectUngroupSolid } from "react-icons/lia";
import { IoMdNotifications } from "react-icons/io";
import UserDropdownList from "./dropdownLists/userDropdownList/userDropdownList";
import AssociatedAccountsDropdownList from "./dropdownLists/associatedAccountsDropdownList/associatedAccountsDropdownList";

const DashboardNavbar = ({ isSmallDevice }: IDashboardNavbar) => {
	const {
		chakra_container,
		nav_container,
		nav,
		icon_container,
		sidebar_toggle,
	} = styles;

	const { toggleSidebar } = useContext(SidebarContext);

	return (
		<>
			<Box as={"nav"} py={"16px"} className={nav}>
				<Container
					maxW={"container"}
					px={"39px"}
					className={chakra_container}>
					<Flex
						as={"div"}
						alignItems={"left"}
						justifyContent={{
							base: "space-between",
							md: "flex-start",
						}}
						className={nav_container}>
						<>
							<UserDropdownList />
						</>
						<Flex
							as={"div"}
							alignItems={"center"}
							className={icon_container}
							cursor={"pointer"}>
							<Box as={"div"} cursor={"pointer"}>
								<LiaObjectUngroupSolid />
							</Box>
							<AssociatedAccountsDropdownList />
							<Box as={"div"} cursor={"pointer"}>
								<IoMdNotifications />
							</Box>
							{isSmallDevice ? (
								<Box
									as={"div"}
									onClick={toggleSidebar}
									className={sidebar_toggle}
									cursor={"pointer"}>
									<RxHamburgerMenu />
								</Box>
							) : (
								<></>
							)}
						</Flex>
					</Flex>
				</Container>
			</Box>
		</>
	);
};

export default DashboardNavbar;
