import { IPageLinkItems } from "@/types/dashboard/manageAccountDropList";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { memo } from "react";

const PageLinkItems = ({ label, image }: IPageLinkItems) => {
	return (
		<Flex
			as={"div"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			gap={"10px"}
			padding={"1px"}
			width={"calc(162px / 3)"} // 192px - (5px * 6)30px padding = 162px / 3 = 54px
			textAlign={"center"}
			sx={{
				"&:hover": {
					color: "red",
					"& > div": {
						transform: "scale(1.1)",
					},
					"& > small": {
						color: "#128c7e",
					},
				},
			}}>
			<Box
				as={"div"}
				width={"100%"}
				height={"50px"}
				borderRadius={"full"}
				overflow={"hidden"}
				sx={{
					"& img": {
						transition: "transform 0.3s ease",
					},
				}}>
				<Image
					src={image}
					width={0}
					height={0}
					placeholder='blur'
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
					alt={"content"}
				/>
			</Box>
			<Box
				as={"small"}
				fontWeight={600}
				fontSize={".8125rem"}
				color={"white"}>
				{label}
			</Box>
		</Flex>
	);
};

export default memo(PageLinkItems);
