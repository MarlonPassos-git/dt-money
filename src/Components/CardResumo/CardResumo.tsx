import { Container, Preco, Titulo } from "./style";

interface cardResumoProps {
    titulo: string,
    valor: number
}

export function CardResumo(props: cardResumoProps) {
    return (
        <Container>
            <Titulo >{props.titulo}</Titulo>
            
            <Preco>R$ {props.valor}</Preco>
        </Container>
    )
}