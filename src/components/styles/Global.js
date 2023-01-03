import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        font-family: 'Andika', sans-serif;
        background-color: ${ ({ theme }) => theme.bgColors.lightGreenBg };
    }

    * {
        box-sizing: border-box;
    }

    p {
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }

    @import url('https://fonts.googleapis.com/css2?family=Andika:wght@400;700&display=swap');


    `