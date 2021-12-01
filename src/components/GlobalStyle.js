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
        min-height: 80vh;
    }
    .button {
        padding: 0.5em 0.826em;
        background: rgb(51, 51, 51);
        color: #f8f8f8;
        text-align: center;
        border: 2px solid rgb(0, 128, 255);
        border-radius: 3.125em;
        width: 9.375em;
    }
`
export default GlogalStyle