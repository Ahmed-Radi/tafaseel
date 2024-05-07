import bgHero from "@/assets/images/hero-bg-2.png";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
	return (
		<div className="home-container">
			<div className="home-bg">
				<Image src={bgHero} alt="bg-hero" />
			</div>
			<Container maxW={"container.xl"} className="container">
				<div className="home-content">
					<div className="hero-content">
						<h2 className="hero-title">
							لا داعي لأن تتعب نفسك كثيراً بعد اليوم مع ادوات
							الأتمتة التلقائية من <span>كرزون</span>
						</h2>
					</div>
					<div className="try-button-content">
						<button className="try-button">
							<span>تجربة جرب الآن</span>
						</button>
					</div>
					<div className="inquiry-section">
						<Link href="/contact" className="call">
							لديك استفسار ؟<b> تواصل معنا</b>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
