import { createGlobalStyle } from "styled-components";
import { progressiveClamp, PXtoRem } from "../assets/progressiveCSS/script";


export const GlobalStyle = createGlobalStyle`
    
    :root {
        /* Cores */

        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
        --background-input: #E7E9EE;
        --border-input: #D7D7D7;
        --button-input: #33CC95;

        /* padding */
        
        --padding-side-container: ${progressiveClamp(24, 160)};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    #root {
        min-height: 100vh;
    }

    body { 
        color: blue;
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        max-width: 100vw;
        overflow-x: hidden;
    };

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;

    }

    .react-modal-overlay {
        display: grid;
        place-items: center;
        position: fixed;
        inset: 0;


        background-color: #00000050;
    }

    .react-modal-content { 
        position: relative;
        
        width: 100%;
        max-width: ${PXtoRem(576)};
        padding: ${progressiveClamp(24, 64)} ${progressiveClamp(24, 48)} ${progressiveClamp(40, 64)};
        border-radius: ${PXtoRem(4)};
        
        background-color: var(--background);

    }
`