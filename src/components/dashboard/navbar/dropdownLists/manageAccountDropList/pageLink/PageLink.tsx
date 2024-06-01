import { IPageLink } from "@/types/dashboard/manageAccountDropList";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";

const PageLink = ({ href, children }: IPageLink) => {
	return (
		<Link href={href} color={"white"}>
			<Flex
				as={"div"}
				width={"100%"}
				height={"100%"}
        align={"center"}
        justifyContent={"center"}
        padding={"5px"}>
				{children}
			</Flex>
		</Link>
	);
};

export default memo(PageLink);