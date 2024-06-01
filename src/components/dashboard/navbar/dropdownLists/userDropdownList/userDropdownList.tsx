import {
	Menu,
	MenuItem,
	MenuButton,
	MenuDivider,
	MenuHeader,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import styles from "./userDropdownList.module.scss";
import { Box } from "@chakra-ui/react";
import { IoPerson, IoSettingsSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { BiRun } from "react-icons/bi";
import UserProfile from "./userProfile/userProfile";
import { memo } from "react";

type Props = {};

function UserDropdownList({}: Props) {
	const { menu_container, szh_menu__header, szh_menu__item } = styles;
	return (
		<Menu
			menuButton={
				<MenuButton>
					<UserProfile />
				</MenuButton>
			}
			menuClassName={menu_container}>
			<MenuHeader>
        <Box as={"h5"} className={szh_menu__header}>
          !مرحبا مليون
        </Box>
      </MenuHeader>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
        <Box as={"span"}>
          الملف الشخصي
        </Box>
        <IoPerson />
			</MenuItem>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
        <Box as={"span"}>
				الإشتراك والفوترة
        </Box>
        <IoSettingsSharp />
      </MenuItem>
			<MenuItem className={szh_menu__item} href={"user/profile"}>
        <Box as={"span"}>
          رمز المصادقة AuthKey
        </Box>
        <FaCode />
			</MenuItem>
			<MenuDivider />
			<MenuItem className={szh_menu__item}>
        <Box as={"span"}>
          تسجيل الخروج
        </Box>
        <BiRun />
      </MenuItem>
		</Menu>
	);
}

export default memo(UserDropdownList);
