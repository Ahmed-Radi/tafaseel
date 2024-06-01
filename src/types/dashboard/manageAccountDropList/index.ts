import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// manageAccountDropList types
export interface IPageLinkArray {
  href: string;
  label: string;
  image: StaticImageData;
}
export interface IPageLink {
	href: string;
	children: ReactNode;
}

export interface IPageLinkItems {
  image: StaticImageData;
  label: string;
}

export interface IManageAccount {
  onClickHandler: () => void;
};
