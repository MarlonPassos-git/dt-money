import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransacaoTabela() {

    useEffect(() => {
        api.get("/transacoes")
            .then(data => console.log(data.data));
    }, []);

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
                    <tr>
                        <td>Almoço</td>
                        <td>R$ 20,00</td>
                        <td>Alimentação</td>
                        <td>20/10/2020</td>
                    </tr>
                    <tr>
                        <td>Almoço</td>
                        <td>R$ 20,00</td>
                        <td>Alimentação</td>
                        <td>20/10/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}