import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --light-bg-color: #ffffff;
    --light-txt-color: #ffffff;
    --dark-bg-color: #000000;
    --dark-txt-color: #000000;
    --span-txt-color: #dedede;
    --link-hover-color: #ffc14d;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  html {
    scroll-behavior: smooth;
    font-size: 15px;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
  }
`;
