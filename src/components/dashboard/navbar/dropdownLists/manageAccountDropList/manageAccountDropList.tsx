"use client";
import React, { useEffect, useRef, useState } from "react";
import ManageAccount from "./manageAccount/manageAccount";
import { Box, Flex } from "@chakra-ui/react";
import PageLink from "./pageLink/PageLink";
import PageLinkItems from "./pageLink/pageLinkItems/pageLinkItems";
import { IPageLinkArray } from "@/types/dashboard/manageAccountDropList";
import { accountLinks } from "@/constants/dashboard/manageAccountDropList";
import styles from "./manageAccountDropList.module.scss";

const ManageAccountDropList = () => {
	const { popup_container } = styles;
	const [isOpen, setOpen] = useState<boolean>(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const onClickHandler = () => {
		setOpen(prev => !prev);
	};

  useEffect(() => {
		// Define handleClickOutside, a function that will be triggered on a mousedown event.
		// It checks if the click occurred outside the referenced component.
		const handleClickOutside = (event: MouseEvent) => {
			// Check if containerRef.current is defined (i.e., the component is mounted)
			// and if the click target is not within containerRef.current (i.e., outside the component).
      if (containerRef.current && event.target instanceof Node && !containerRef.current.contains(event.target)) {
				// If the click is outside, set the isOpen state to false, closing or hiding the component.
				setOpen(false);
			}
		};

		// Add the handleClickOutside function as an event listener for mousedown events on the document.
		// This captures all mousedown events that bubble up to the document level.
		document.addEventListener("mousedown", handleClickOutside as EventListener);

		// Return a cleanup function from useEffect.
		// This cleanup function is called when the component unmounts,
		// ensuring that we properly remove the event listener to prevent memory leaks.
		return () => {
			document.removeEventListener("mousedown", handleClickOutside as EventListener);
		};
	}, []);

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

export default ManageAccountDropList;
