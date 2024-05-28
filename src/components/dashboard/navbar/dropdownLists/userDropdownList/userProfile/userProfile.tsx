import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import image from "@/assets/images/login-image.png";
import styles from './userImage.module.scss';

type Props = {};

function UserProfile({}: Props) {
	const { content_container, text_details } = styles;
  return (
		<>
			<Flex as={"div"} alignItems={"center"} className={content_container}>
				<Box
					as={"div"}
					display={{
						base: "none",
						lg: "block",
					}}
					mx={2}
					fontSize={"14px"}
					fontWeight={"600"}
					cursor={"pointer"}
          className={text_details}>
					تفاصيل
				</Box>
				<Box
					as={"div"}
					borderRadius={"full"}
					overflow={"hidden"}
					width={"36px"}
					height={"36px"}
					cursor={"pointer"}>
					<Image
						src={image}
						style={{ objectFit: "cover" }}
						placeholder={"blur"}
						alt={"user profile image"}
					/>
				</Box>
			</Flex>
		</>
	);
}

export default UserProfile;
