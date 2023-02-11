// src/app.js

const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;

/*
No código acima estamos criando as definições do express. Vale ressaltar que a função app.listen() não está sendo executada no arquivo src/app.js. Contudo, estamos realizando um module.exports na constante app que inicializa o express e registra os middlewares que serão utilizados inicialmente.

A razão disso é que quando formos escrever nossos testes de integração, a definição de inicialização, rotas e middlewares do express, devem estar separadas da inicialização dele. Isso nos permitirá criar um mock das nossas rotas facilitando o processo de testar nossa API.

🤔 Você deve estar se perguntando: “onde realizaremos a chamada da função app.listen() necessária para inicializar o express?” Nesse ponto entra o nosso arquivo src/server.js, no qual adicionaremos o seguinte conteúdo:

 */