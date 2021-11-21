import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = '/api';
    
    this.get('/transacoes', ()=> {
      return [
        {
          id: 1,
          title: 'Salário',
          value: 4000,
          category: 'Receita',
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 500,
          category: 'Despesa',
        },
        {
          id: 3,
          title: 'Compras',
          value: 1500,
          category: 'Despesa',
        },
        {
          id: 4,
          title: 'Almoço',
          value: 50,
          category: 'alimentação'
        },
        {
          id: 5,
          title: 'Jantar',
          value: 100, 
          category: 'alimentação'
        }
      ]
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
