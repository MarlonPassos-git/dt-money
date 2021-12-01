import { useContext} from "react";

import { TransacoesContexto } from "../../TransacoesContexto";
import { Container, TDvalor } from "./style";




export function TransacaoTabela() {
    const { transacoes } = useContext(TransacoesContexto);

    

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map(transacao => {
                        
                        const valorFormatado = new Intl.NumberFormat('pt-BR', 
                        { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(transacao.valor);
                        const dataFormatada = new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transacao.data)
                        );

                        return (
                        <tr key={transacao.id}>
                            <td>{transacao.titulo}</td>
                            <TDvalor
                                tipoTransacao={transacao.tipo}
                            >
                                {valorFormatado}
                            </TDvalor>
                            <td>{transacao.categoria}</td>
                            <td>{dataFormatada}</td>
                        </tr>   
                    )})}
                </tbody>
            </table>
        </Container>
    )
}