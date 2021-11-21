import React, { useState } from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header';
import { GlobalStyle } from './styles/gobal';
import Modal from 'react-modal';




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
    <Modal 
                isOpen={moldaldaTransacaoEstaAberto} // Verica o estado do modal
                onRequestClose={fechaMoldalDaTransacao} // 
            >
                <h1>Modal</h1>
            </Modal>
    </>
  );
}

 
