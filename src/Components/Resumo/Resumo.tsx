import { useContext } from "react";

import { CardResumo } from "../CardResumo/CardResumo";
import { Container } from "./style";
import iconEntrada from "../../assets/icon/entrada.svg";
import iconSaida from "../../assets/icon/saida.svg";
import iconTotal from "../../assets/icon/total.svg";
import { useTransacoes } from "../../hooks/useTransacoes";

export function Resumo() {

    const { transacoes } = useTransacoes();

    let entradas = 0;
    let saidas = 0;
    let total = 0;

    transacoes.forEach(transacao => {
        if (transacao.tipo === "entrada") {
            entradas += transacao.valor;
        } else {
            saidas += transacao.valor;
        }
    })
    total = entradas - saidas;

    console.log(entradas, saidas);

    return (
        <Container>
            <CardResumo icone={iconEntrada} titulo="Entradas" valor={entradas} />
            <CardResumo icone={iconSaida}  titulo="Saidas" valor={saidas}/>
            <CardResumo background={'var(--green)'} icone={iconTotal} titulo="Total" valor={total}/>
        </Container>
    );
}