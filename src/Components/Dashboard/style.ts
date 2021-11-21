import styled from 'styled-components';
import { progressiveMin } from "../../assets/progressiveCSS/script.js"

export const Main = styled.main`
    padding: 0 var(--padding-side-container);
    background-color: var(--background);
    min-height: calc(100vh - ${progressiveMin(234, 212)} )
`