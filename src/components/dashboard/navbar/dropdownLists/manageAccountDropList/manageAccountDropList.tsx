"use client";
import React, { memo, useCallback, useRef, useState } from "react";
import ManageAccount from "./manageAccount/manageAccount";
import { Box, Flex, useOutsideClick } from "@chakra-ui/react";
import PageLink from "./pageLink/PageLink";
import PageLinkItems from "./pageLink/pageLinkItems/pageLinkItems";
import { IPageLinkArray } from "@/types/dashboard/manageAccountDropList";
import { accountLinks } from "@/constants/dashboard/manageAccountDropList";
import styles from "./manageAccountDropList.module.scss";

const ManageAccountDropList = () => {
	const { popup_container } = styles;
	const [isOpen, setOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const onClickHandler = useCallback(() => {
		setOpen(prev => !prev);
	} ,[]);

  // It checks if the click occurred outside the referenced component.
  useOutsideClick({
    ref: containerRef,
    handler: () => setOpen(false),
  });

	return (
		<Box as={"div"} position={"relative"} ref={containerRef}>
			<ManageAccount onClickHandler={onClickHandler} />
			{isOpen && (
				<Box
					as={"div"}
					position={"absolute"}
					left={{
						base: "-174%",
						md: "-130%",
					}} //-40px
					top={"33px"}
					borderRadius={"7px"}
					width={"192px"}
					className={popup_container}>
					<Flex
						as={"div"}
						flexDirection={"row-reverse"}
						flexWrap={"wrap"}
						py={"8px"}
						width={"100%"}
						background={"#172b4d"}
						borderRadius={"7px"}
						alignItems={"flex-start"}>
						{accountLinks.map(
							(
								{ href, label, image }: IPageLinkArray,
								index: number
							) => (
								<PageLink href={href} key={index}>
									<PageLinkItems
										image={image}
										label={label}
									/>
								</PageLink>
							)
						)}
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default memo(ManageAccountDropList);
