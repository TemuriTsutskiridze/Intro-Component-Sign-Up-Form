import { createGlobalStyle } from "styled-components";
import BgMobile from "../assets/bg-intro-mobile.png";
import BgDesktop from "../assets/bg-intro-desktop.png";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    background-color: #FF7979;
    background-image: url(${BgMobile});
    padding: 8.8rem 0 6.8rem;
    display: flex;
    justify-content: center;

    @media (min-width: 90em) {
        padding: 12.1rem 0;
        background-image: url(${BgDesktop});
    }
  }

  #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6.4rem;

        @media (min-width: 90em) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 4.5rem;
        }
    }

`;
