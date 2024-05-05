"use client"
import Logo from "@/assets/images/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (typeof window !== 'undefined') {
    // Use window object here
    // change navbar color after scrolling
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("navbar--scrolled", window.scrollY > 400);
      }
    });
  }

	return (
		<nav className='navbar'>
			<Container maxW={"container.xl"}>
				<div className='navbar-container'>
					<div className='navbar__auth-buttons'>
						{isLoggedIn ? (
							<>
								<Link
									href='#'
									className='navbar__auth-button navbar__auth-button--logout'
									onClick={()=>{}}>
									Logout
								</Link>
							</>
						) : (
							<>
								<div className='sm-bars' onClick={() => {}}>
									<FaBars size={20} />
								</div>
								<Link
									href='#'
									className='navbar__auth-button navbar__auth-button--try'>
									<span>تجربة الخدمة</span>
								</Link>
								<Link
									href='#'
									className='navbar__auth-button navbar__auth-button--login'>
									تسجيل الدخول
									<AiOutlineUser />
								</Link>
							</>
						)}
					</div>
					<ul className='navbar__items'>
						<li>
							<Link href='#'>الأخبار والتحديثات</Link>
						</li>
						<li>
							<Link href='#'>الخدمات</Link>
						</li>
						<li>
							<Link href='#'>عن كرزون</Link>
						</li>
						<li>
							<Link href='#'>التسعير</Link>
						</li>
						<li>
							<Link href='#'>الرئيسية</Link>
						</li>
					</ul>
					<div className='navbar__logo'>
						<Link href='/'>
							<Image height="70" width="70" src={Logo} alt='logo' />
						</Link>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
