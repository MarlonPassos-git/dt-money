import { Resumo } from "../Resumo/Resumo";
import { TransacaoTabela } from "../TransacoesTabela/TransacoesTabela";
import { Main } from "./style";


export function Dashboard() {
    return (
        <Main>
            <Resumo />
            <TransacaoTabela />
        </Main>
        );
}