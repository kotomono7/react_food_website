import {
	ButtonContainer,
	ContactIcons,
	HeroContent,
	ImageContainer,
	StyledHeroSection,
} from "./HeroSectionStyles";
import heroImage from "../../assets/Ramen.png";
import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const HeroSection = () => {
	const HeroItems = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 2.5,
				staggerChildren: 0.3,
			},
		},
	};

	const ChildItem = {
		hidden: { opacity: 0, x: -150 },
		visible: { opacity: 1, x: 0 },
	};

	const HeroImgItem = {
		hidden: { opacity: 0, x: 150 },
		visible: { opacity: 1, x: 0 },
	};

	return (
		<>
			<StyledHeroSection
				initial="hidden"
				animate="visible"
				variants={HeroItems}
			>
				<HeroContent>
					<motion.h2 variants={ChildItem}>
						Vibing in <span>KotoMono</span>
					</motion.h2>
					<motion.p variants={ChildItem}>
						Best Japanese food outlet outside Japan. It's truly delicious!
					</motion.p>
					<ButtonContainer>
						<motion.button variants={ChildItem} className="menu">
							All Menus
						</motion.button>
						<motion.button variants={ChildItem}>Seat Type</motion.button>
						<motion.button variants={ChildItem}>Capacity</motion.button>
					</ButtonContainer>
				</HeroContent>
				<ImageContainer variants={HeroImgItem}>
					<img src={heroImage} alt="FoodMood" />
				</ImageContainer>
				<ContactIcons>
					<motion.a variants={ChildItem} href="#facebook">
						<BsFacebook />
					</motion.a>
					<motion.a variants={ChildItem} href="#twitter">
						<BsTwitter />
					</motion.a>
					<motion.a variants={ChildItem} href="#instagram">
						<BsInstagram />
					</motion.a>
					<motion.a variants={ChildItem} href="#youtube">
						<BsYoutube />
					</motion.a>
				</ContactIcons>
			</StyledHeroSection>
		</>
	);
};

export default HeroSection;
