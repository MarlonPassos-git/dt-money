import React, { useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './styles/global';
import { NovaTransacaoModal } from './Components/NovatransacaoModal/NovaTransacaoModal';
import { TransacoesFornecedor } from './hooks/useTransacoes';




export function App() {

  const [moldaldaTransacaoEstaAberto, setMoldaldaTransacaoEstaAberto] = useState(false);

  function abreMoldalDaTransacao () {
      setMoldaldaTransacaoEstaAberto(true);
  }
  function fechaMoldalDaTransacao () { 
      setMoldaldaTransacaoEstaAberto(false);
  }

  return (  
    <TransacoesFornecedor>
      <GlobalStyle />
      <Header onAbreMoldalDaTransacao={abreMoldalDaTransacao} />
      <Dashboard />
      <NovaTransacaoModal 
        estaAberto={moldaldaTransacaoEstaAberto}
        quandoFechar={fechaMoldalDaTransacao}
      />
    </TransacoesFornecedor>
  );
}

 
