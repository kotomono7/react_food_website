import {
	AdditionalIcon,
	LinkItem,
	Logo,
	NavLinks,
	StyledNav,
	ThemeIcon,
} from "./NavbarSectionStyles";
import { FaMoon, FaSun } from "react-icons/fa";
import { BsFillChatDotsFill, BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = ({ theme, toggleTheme }) => {
	const NavItems = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.4,
				staggerChildren: 0.2,
			},
		},
	};

	const ChildItem = {
		hidden: { opacity: 0, y: -100 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<>
			<StyledNav initial="hidden" animate="visible" variants={NavItems}>
				<Logo variants={ChildItem}>
					Food<span>Mood</span>
				</Logo>
				<NavLinks>
					<LinkItem href="#home" className="active" variants={ChildItem}>
						Home
					</LinkItem>
					<LinkItem href="#about" variants={ChildItem}>
						About
					</LinkItem>
					<LinkItem href="#deliv" variants={ChildItem}>
						Delivery
					</LinkItem>
					<LinkItem href="#location" variants={ChildItem}>
						Location
					</LinkItem>
					<LinkItem href="#outlet" variants={ChildItem}>
						Outlet
					</LinkItem>
				</NavLinks>
				<AdditionalIcon>
					<motion.div variants={ChildItem}>
						<a href="#phone">
							<BsFillTelephoneFill />
						</a>
					</motion.div>
					<motion.div variants={ChildItem}>
						<a href="#cart">
							<BsFillChatDotsFill />
						</a>
					</motion.div>
				</AdditionalIcon>
				<ThemeIcon
					onClick={toggleTheme}
					colortheme={theme}
					variants={ChildItem}
				>
					{theme === "light" ? <FaMoon /> : <FaSun />}
				</ThemeIcon>
			</StyledNav>
		</>
	);
};

export default Navbar;
