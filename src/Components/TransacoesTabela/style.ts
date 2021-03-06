import styled from "styled-components";
import { progressiveClamp, PXtoRem } from "../../assets/progressiveCSS/script";

export const Container = styled.section`
    
    table {
        width: 100%;
        border-spacing:  0   ${PXtoRem(8)};
        color: var(--text-body);
            
        th {
            font-size: ${PXtoRem(16)};
            line-height: ${PXtoRem(24)};
            
            text-align: left;
            font-weight: 400;
            padding: 0 ${progressiveClamp(24, 32)};

        }
    

        td {
            height: ${PXtoRem(64)};
            border: 0;
            background-color: var(--shape);
            padding: 0 ${progressiveClamp(24, 32)};
            
            
        }

        td:first-child  {
            border-radius: ${PXtoRem(5)} 0 0 ${PXtoRem(5)};
        }

        td:last-child {
            border-radius: 0 ${PXtoRem(5)} ${PXtoRem(5)} 0;
        }
         
    }

`

interface propsTDvalor {
    tipoTransacao: string;
}

export const TDvalor = styled.td<propsTDvalor>`
    color: ${
        props => props.tipoTransacao === 'entrada' ? 'var(--green)' : 'var(--red)'
    }
`