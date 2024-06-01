import { IPageLinkArray } from "@/types/dashboard/manageAccountDropList";
import image from "@/assets/images/login-image.png";

export const accountLinks: IPageLinkArray[] = [
	{ href: "/user/device", label: "الحسابات", image: image },
	{ href: "/user/sent-text-message", label: "الإرسال اليدوي", image: image },
	{ href: "/user/chatbot", label: "الرد الآلي", image: image },
	{ href: "/user/contact", label: "جهات الإتصال", image: image },
	{ href: "/user/logs", label: "سجل الرسائل", image: image },
];