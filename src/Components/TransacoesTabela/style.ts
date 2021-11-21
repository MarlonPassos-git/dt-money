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
            border-radius: ${PXtoRem(5)};
            
        }
         
    }

`