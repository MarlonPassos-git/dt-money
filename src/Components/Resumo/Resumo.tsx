import { useContext } from "react";

import { CardResumo } from "../CardResumo/CardResumo";
import { Container } from "./style";
import { TransacoesContexto } from "../../TransacoesContexto";

export function Resumo() {

    const transacoes = useContext(TransacoesContexto);

    console.log(transacoes);

    return (
        <Container>
            <CardResumo titulo="Entradas" valor={0} />
            <CardResumo titulo="Saidas" valor={0}/>
            <CardResumo titulo="Total" valor={0}/>
        </Container>
    );
}