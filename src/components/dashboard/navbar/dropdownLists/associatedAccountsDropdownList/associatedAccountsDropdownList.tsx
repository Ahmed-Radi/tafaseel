import {
	Menu,
	MenuItem,
	MenuButton,
	MenuDivider,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Box } from "@chakra-ui/react";
import CurrentAccounts from "./currentAccounts/currentAccounts";
import styles from "./associatedAccountsDropdownList.module.scss";
import { memo } from "react";

type Props = {};

function AssociatedAccountsDropdownList({}: Props) {
	const { menu_container, szh_menu__item } = styles;
	return (
		<Menu
			menuButton={
				<MenuButton>
					<CurrentAccounts />
				</MenuButton>
			}
			menuClassName={menu_container}>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
				<Box as={"span"}>API DATA</Box>
			</MenuItem>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
				<Box as={"span"}>API DATA</Box>
			</MenuItem>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
				<Box as={"span"}>API DATA</Box>
			</MenuItem>
			<MenuDivider />
			<MenuItem className={szh_menu__item} href={"/user/device/create"}>
				<Box as={"span"}>+</Box>
			</MenuItem>
		</Menu>
	);
}

export default memo(AssociatedAccountsDropdownList);
