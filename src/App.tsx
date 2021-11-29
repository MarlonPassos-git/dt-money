import React, { useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './styles/gobal';
import { NovaTransacaoModal } from './Components/NovatransacaoModal/NovaTransacaoModal';




export function App() {

  const [moldaldaTransacaoEstaAberto, setMoldaldaTransacaoEstaAberto] = useState(false);

  function abreMoldalDaTransacao () {
      setMoldaldaTransacaoEstaAberto(true);
  }
  function fechaMoldalDaTransacao () {
      setMoldaldaTransacaoEstaAberto(false);
  }

  return (  
    <>
      <GlobalStyle />
      <Header onAbreMoldalDaTransacao={abreMoldalDaTransacao} />
      <Dashboard />
      <NovaTransacaoModal 
        estaAberto={moldaldaTransacaoEstaAberto}
        quandoFechar={fechaMoldalDaTransacao}
      />
    </>
  );
}

 
