// import Number from "@/assets/icons/Number.svg";
// import Notice from "@/assets/icons/Notice.svg";
import { Container } from "@chakra-ui/react";
import SocialMediaLink from "./SocialMediaLink";
import { topNavbarSocialMediaIcon } from "@/constants/constants";
import Link from "next/link";
import { Icons } from "@/assets/icons/Icons";

const TopNavbar = () => {
	return (
		<div className="top-navbar">
			<Container maxW={"container.xl"}>
				<div className="top-navbar-content">
					<div className="left-side">
						{topNavbarSocialMediaIcon.map(({ icon, link }, index) => (
							<SocialMediaLink
								key={index}
								icon={icon}
								link={link}
							/>
						))}
					</div>
					<div className="right-side">
						<Link href="" className="customer-service-email">
							<span className="customer-service-content">
								<b>
									أهلاً بالتحديث الرائع الجديد, شاركونا
									الفرحة:
								</b>
								&nbsp;هيا بنا مع كرزون
							</span>
							<Icons.notice />
						</Link>
						<Link
							href="tel:971507746687"
							className="customer-service-phone">
							<span className="customer-service-content">
								تواصل مع المبيعات :&nbsp;
								<b>+971507746687</b>
							</span>
							<Icons.number />
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default TopNavbar;
