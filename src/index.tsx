import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: { // isso é o "banco de dados" do mirage
    transacoes: Model, // cria um modelo chamado transacoes. Acho que aqui é um coluna do banco de dados
  },

  seeds(server) { // aqui é onde eu crio os dados que vão aparecer no banco de dados inicialmente
    server.db.loadData({
      transacoes: [
        {
          id: 1,
          titulo: 'Salário',
          valor: 2000,
          tipo: 'entrada',
          categoria: 'Salário',
          data: new Date('01/01/2020'),
        },
        {
          id: 2,
          titulo: 'Aluguel',
          valor: 1000,
          tipo: 'saida',
          categoria: 'Casa',
          data: new Date('10/01/2020'),
        },
      ]
    });
  },

  routes() {
    this.namespace = '/api';
    
    this.get('/transacoes', ()=> {
      return this.schema.all('transacoes'); // retorna todas os dados das transações
    })

    this.post('/transacoes', (schema, request) => { // Aqui eu estou definindo oque fazer no metodo post (enviar dados) // Request é os dados que vem do frontend
      const novaTransacao = JSON.parse(request.requestBody) // Aqui eu estou pegando os dados e transformando em um JSON

      return schema.create('transacoes', novaTransacao) 
      // o return é o dado que eu quero que seja enviado para a API
      // schema.create é o metodo que cria um novo registro no banco de dados
    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
