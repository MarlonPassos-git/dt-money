import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transacoes: Model,
  },

  routes() {
    this.namespace = '/api';
    
    this.get('/transacoes', ()=> {
      return this.schema.all('transacoes');
    })

    this.post('/transacoes', (schema, request) => {
      const novaTransacao = JSON.parse(request.requestBody)
      return schema.create('transacoes', novaTransacao)
    })

  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
