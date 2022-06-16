import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeroSection = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: calc(100% - 70px);
`;

export const HeroContent = styled.div`
	align-self: flex-start;
	margin-top: 80px;
	flex: 1;

	h2 {
		font-size: 70px;
		font-weight: 500;
		line-height: 90px;

		span {
			color: ${({ theme }) => theme.accentColor};
			display: block;
		}
	}

	p {
		margin: 5px 0px 25px 0;
	}
`;

export const ImageContainer = styled(motion.div)`
	flex: 1;

	img {
		height: 85vh;
		width: auto;
		margin-top: auto;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;

	button {
		background: none;
		outline: none;
		padding: 17px 34px;
		margin-right: 20px;
		border-radius: 30px;
		color: ${({ theme }) => theme.fontColor};
		border: 1px solid ${({ theme }) => theme.fontColor};
		cursor: pointer;

		&:where(.menu) {
			font-weight: bold;
			color: ${({ theme }) => theme.fontColor};
			background: ${({ theme }) => theme.btnColor};
		}

		&:hover {
			font-weight: bold;
			color: ${({ theme }) => theme.bgColor};
			background: ${({ theme }) => theme.accentColor};
		}
	}
`;

export const ContactIcons = styled.div`
	display: flex;
	position: absolute;
	gap: 20px;
	bottom: 50px;
	left: 100px;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		border-radius: 100%;
		height: 50px;
		width: 50px;
		color: ${({ theme }) => theme.fontColor};
		border: 1px solid ${({ theme }) => theme.fontColor};
		font-size: 20px;

		&:hover {
			color: ${({ theme }) => theme.bgColor};
			background: ${({ theme }) => theme.accentColor};
		}
	}
`;
