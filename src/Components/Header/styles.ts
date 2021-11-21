import styled from "styled-components";
import {   progressiveClamp, progressiveMin, PXtoRem } from "../../assets/progressiveCSS/script.js"


export const HeaderContainer = styled.header`
    height: ${progressiveMin(234, 212)};
    background-color: var(--blue);
    padding: ${progressiveClamp(66, 32)} var(--padding-side-container);
    display: flex;
    justify-content: space-between;
        
`   

export const Logo = styled.img`
    width: ${progressiveClamp(135, 172)};
    height: ${progressiveClamp(31, 40)};

`

export const BotaoNovaTransacao = styled.button`
    width: ${progressiveClamp(130, 195)};
    height: ${progressiveClamp(40, 48)};
    background-color: var(--blue-light);
    border: none;
    font-weight: 600;
    font-size: ${progressiveClamp(12, 16)};
    line-height: ${progressiveClamp(18, 24)};
    color: var(--shape);
    border-radius: ${PXtoRem(5)};
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`