import { createGlobalStyle } from "styled-components";

const color_primari_background = "#242124"

const GlogalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        max-width: 100%;
        font-size: 100%;
        padding: 0 4%;
        font-family: 'Poppins', sans-serif;
    &::-webkit-scrollbar{
            width: 0.7rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgray;
        }
    }
    body {
        overflow-x: hidden;
        background: ${color_primari_background};
        color: white;
    }
    a {
        font-size: 1em;
        color: white;
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    article {
        margin-top: 6em;
    }
`
export default GlogalStyle