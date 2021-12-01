import { Container, Icone, Preco, Titulo } from "./style";

interface cardResumoProps {
    titulo: string,
    valor: number,
    icone: string,
    background?: string ;
}

export function CardResumo(props: cardResumoProps) {

    const valorFormatado = new Intl.NumberFormat('pt-BR', 
                        { 
                            style: 'currency', 
                            currency: 'BRL' 
                        }).format(props.valor);

    return (
        <Container background={props.background}>
            <Titulo >{props.titulo}</Titulo>
            <Preco>{valorFormatado}</Preco>
            <Icone src={props.icone} />
        </Container>
    )
}