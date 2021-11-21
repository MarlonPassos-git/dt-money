import styled from 'styled-components';
import { progressiveClamp } from '../../assets/progressiveCSS/script';

export const Container = styled.div`
    transform: translateY(-50%);
    height: min-content;
    display: inline-flex;
    gap: ${progressiveClamp(16, 32)};
`;