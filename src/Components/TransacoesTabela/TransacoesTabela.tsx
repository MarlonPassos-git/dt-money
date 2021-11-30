import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, TDvalor } from "./style";

interface transacoesPropiedades {
    id: 1,
    titulo: string,
    valor: number,
    tipo: string,
    categoria: string,
    data: string,
}


export function TransacaoTabela() {

    const [transacoes, setTransacoes] = useState<transacoesPropiedades[]>([]);

    useEffect(() => {
        api.get("/transacoes")
            .then(resposta => { setTransacoes(resposta.data.transacoes) });
    }, []);

    console.log(transacoes);
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
                    {transacoes.map(transacao => (
                        <tr key={transacao.id}>
                            <td>{transacao.titulo}</td>
                            <TDvalor
                                tipoTransacao={transacao.tipo}
                            >R${transacao.valor}</TDvalor>
                            <td>{transacao.categoria}</td>
                            <td>{transacao.data}</td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        </Container>
    )
}