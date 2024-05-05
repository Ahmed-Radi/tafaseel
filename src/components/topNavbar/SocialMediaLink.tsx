import Link from "next/link";

interface ISocialMediaLink {
	link: string;
	icon: React.FunctionComponent<{ size?: number }>;
}

export default function SocialMediaLink({
	link,
	icon: IconComponent,
}: ISocialMediaLink) {
	return (
		<Link className='left-side-icon' href={link}>
			<IconComponent size={18} />
		</Link>
	);
}
