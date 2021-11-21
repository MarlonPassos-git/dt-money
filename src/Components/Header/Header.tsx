
import logo from '../../assets/image/logo.svg'
import { BotaoNovaTransacao, HeaderContainer, Logo } from './styles'


interface PropriedadesHeader {
    onAbreMoldalDaTransacao: () => void;
  }


export function Header (prop: PropriedadesHeader) {
    
    return (
        <HeaderContainer>
            <Logo src={logo} alt="" />
            <BotaoNovaTransacao onClick={prop.onAbreMoldalDaTransacao} type="button">
                Nova Transação
            </BotaoNovaTransacao>
            
        </HeaderContainer>
    )
} 