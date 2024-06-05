import Link from "next/link";
import styles from "./serviceButton.module.scss";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { memo, ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { IoCalendarOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { usePopup } from "@/store/popupContext/popupContext";

interface IForwardButton {
	label: string;
	link: string;
	icon: ReactNode;
	action?: () => void;
}

function ServiceButton() {
	const { service_link } = styles;

	const pathname = usePathname();
	const router = useRouter();

	const openPopup = usePopup().openPopup;

	//* Handlers
	const handleGoBack = () => {
		router.back(); // Navigate back to the previous page
	};
	const handleOpenPopup = () => {
		openPopup();
	};

	let forwardButton: IForwardButton[] = [
		{
			label: "",
			link: "",
			icon: <></>,
			action: () => {},
		},
	];
	switch (pathname) {
		case "/user/device":
			forwardButton = [
				{
					label: "ربط واتساب جديد",
					link: "/user/device/create",
					icon: <Plus />,
				},
			];
			break;
		case "/user/device/create":
			forwardButton = [
				{
					label: "back",
					link: "",
					icon: <></>,
				},
			];
			break;
		// sub menu
		case "/user/sent-text-message":
			forwardButton = [
				{
					label: "",
					link: "",
					icon: <></>,
				},
			];
			break;
		case "/user/chatbot":
			forwardButton = [
				{
					label: "إضافة رد آلي جديد",
					link: "", // add action
					icon: <Plus />,
					action: handleOpenPopup,
				},
				{
					label: "انشاء قالب رسالة تفاعلية",
					link: "/user/template",
					icon: <Plus />,
				},
			];
			break;
		case "/user/schedule-message":
			forwardButton = [
				{
					label: "انشاء حملة جديدة",
					link: "/user/schedule-message/create",
					icon: <IoCalendarOutline />,
				},
				{
					label: "قوالب الرسائل المحفوظة",
					link: "/user/template",
					icon: <FaEdit />,
				},
			];
			break;
		// end sub menu
		case "/user/contact":
			forwardButton = [
				{
					label: "back",
					link: "user/contact/create",
					icon: <></>,
				},
				{
					label: "إستيراد أرقام",
					link: "",
					icon: <></>,
					action: handleOpenPopup,
				},
				{
					label: "إنشاء مجموعة ارقام جديدة",
					link: "",
					icon: <></>,
					action: handleOpenPopup,
				},
			];
			break;
		case "/user/logs":
			forwardButton = [
				{
					label: "",
					link: "",
					icon: <></>,
				},
			];
			break;
		// end first menu //

		case "/user/services":
			forwardButton = [
				{
					label: "لديك طلب خاص ؟ تواصل مع الدعم",
					link: "", // open chatbot
					icon: <Plus />,
				},
			];
			break;
		case "/user/subscription":
			forwardButton = [
				{
					label: "ادارة الفواتير والإشتراكات",
					link: "/user/billing",
					icon: <LuCalendarClock />,
				},
			];
			break;
		// end second menu //
		case "/user/profile":
			forwardButton = [
				{
					label: "العودة للوحة التحكم",
					link: "/user/dashboard",
					icon: <></>,
				},
			];
			break;
		case "/user/auth-key":
			forwardButton = [
				{
					label: "العودة للوحة التحكم",
					link: "/user/dashboard",
					icon: <></>,
				},
			];
			break;
		// end third menu //

		default:
			forwardButton = [
				{
					label: "",
					link: "",
					icon: <></>,
				},
			];
	}

	return (
		<>
			{forwardButton.map(
				({ link, label, icon, action }: IForwardButton) => {
					if (!label) return <></>;
					else if (label === "back") {
						return (
							<Box
								key={link}
								onClick={handleGoBack}
								cursor={"pointer"}
								className={service_link}>
								الرجوع للخلف
							</Box>
						);
					} else if (Boolean(action)) {
						return (
							<Box
								key={label}
								onClick={action}
								cursor={"pointer"}
								className={service_link}>
								{label}
							</Box>
						);
					} else {
						return (
							<Link
								href={link}
								className={service_link}
								key={link}>
								{label}&nbsp;{icon}
							</Link>
						);
					}
				}
			)}
		</>
	);
}

export default memo(ServiceButton);
