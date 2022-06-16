import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
`;

export const Logo = styled(motion.div)`
	font-weight: 700;
	font-size: 25px;

	span {
		color: ${({ theme }) => theme.accentColor};
	}
`;

export const NavLinks = styled(motion.div)`
	display: flex;
	gap: 50px;
`;

export const LinkItem = styled(motion.a)`
	position: relative;
	text-decoration: none;
	color: ${({ theme }) => theme.fontColor};
	font-weight: 500;

	&:where(.active) {
		font-weight: bold;
		color: ${({ theme }) => theme.accentColor};
	}

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 0.2rem;
		background-color: ${({ theme }) => theme.accentColor};
		bottom: -5px;
		left: 0;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.5s ease-in-out;
	}

	&:hover {
		color: ${({ theme }) => theme.accentColor};

		&::after {
			transform: scaleX(1);
		}
	}
`;

export const ThemeIcon = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	font-size: 20px;
	cursor: pointer;
	color: ${({ theme, colortheme }) =>
		colortheme === "dark" ? theme.accentColor : theme.fontColor};
`;

export const AdditionalIcon = styled(motion.div)`
	display: flex;
	gap: 15px;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		padding: 7px;
		border-radius: 100%;
		border: 1px solid ${({ theme }) => theme.fontColor};
		color: ${({ theme }) => theme.fontColor};

		&:hover {
			border: 1px solid ${({ theme }) => theme.accentColor};
			color: ${({ theme }) => theme.accentColor};
		}
	}
`;
