import { GlobalStyles } from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import Navbar from "./components/Navbar/NavbarSection";
import HeroSection from "./components/Hero/HeroSection";

const Container = styled.div`
	height: 100vh;
	padding: 0 100px;
	position: relative;
`;

const LightTheme = {
	bgColor: "#ffffff",
	fontColor: "#000000",
	accentColor: "#ffa500",
	btnColor: "#d7a34c",
};

const DarkTheme = {
	bgColor: "#000000",
	fontColor: "#ffffff",
	accentColor: "#ffc14d",
	btnColor: "#766227",
};

function App() {
	const [theme, setTheme] = useState("dark");

	const changeTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
			<GlobalStyles />
			<Container>
				<Navbar theme={theme} toggleTheme={changeTheme} />
				<HeroSection />
			</Container>
		</ThemeProvider>
	);
}

export default App;
