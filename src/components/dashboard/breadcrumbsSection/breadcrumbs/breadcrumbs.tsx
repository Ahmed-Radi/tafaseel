"use client";
import React, { memo, useMemo } from "react";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import style from './breadcrumbs.module.scss';

interface IBreadcrumbItem {
	href: string;
	label: string;
}

function Breadcrumbs() {
  const { chakra_breadcrumb } = style;
	const pathname: string = usePathname();
	const pathSegments: string[] = useMemo(
		() => pathname.split("/").filter((segment: string) => segment),
		[pathname]
	);

	const breadcrumbs: IBreadcrumbItem[] = useMemo(
		() => [
			{ href: "/", label: "Home" },
			...pathSegments.map(
				(segment: string, index: number): IBreadcrumbItem => ({
					href: "/" + pathSegments.slice(0, index + 1).join("/"),
					label: segment.charAt(0).toUpperCase() + segment.slice(1),
				})
			),
		],
		[pathSegments]
	);

	const breadcrumbItems = breadcrumbs.map(
		({ href, label }: IBreadcrumbItem, index: number) => (
			<BreadcrumbItem
				key={label}
				flexDirection={"row-reverse"}
				isCurrentPage={Boolean(index === breadcrumbs.length - 1)}>
				<BreadcrumbLink href={href}>
					{index === 0 ? <IoMdHome /> : label}
				</BreadcrumbLink>
			</BreadcrumbItem>
		)
	);

	return (
		<Box as={"div"} display={{
      base: "none",
      sm: "block"
    }}>
			<Breadcrumb separator={"-"} className={chakra_breadcrumb}>{breadcrumbItems}</Breadcrumb>
		</Box>
	);
}

export default memo(Breadcrumbs);
