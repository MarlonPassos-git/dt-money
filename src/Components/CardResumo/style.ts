import styled from 'styled-components';
import { progressiveClamp, PXtoRem } from '../../assets/progressiveCSS/script';

export const Container = styled.div`
    display: grid;
    grid-template:
        "titulo icone" min-content
        "preco preco" min-content
    ;
    padding: ${progressiveClamp(18, 25)} ${PXtoRem(20)} ${progressiveClamp(42, 18)} ${progressiveClamp(22, 32)} ;
    height: ${progressiveClamp(200, 136)};
    width: ${progressiveClamp(300, 352)};
    background-color: var(--shape);
    border-radius: ${PXtoRem(5)};

`

export const Titulo = styled.p`
    font-size: ${progressiveClamp(14, 16)};
    line-height: ${progressiveClamp(21, 24)};
    color: #363F5F;
    grid-area: titulo;

`

export const Preco = styled.strong`
    font-weight: 500;
    font-size: ${progressiveClamp(30, 36)};
    line-height: ${progressiveClamp(45, 54)};
    color: #363F5F;
    grid-area: preco;
    margin-top: ${progressiveClamp(55 ,14)};

`