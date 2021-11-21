import { CardResumo } from "../CardResumo/CardResumo";
import { Container } from "./style";

export function Resumo() {
    return (
        <Container>
            <CardResumo titulo="Entradas" valor={0} />
            <CardResumo titulo="Saidas" valor={0}/>
            <CardResumo titulo="Total" valor={0}/>
        </Container>
    );
}