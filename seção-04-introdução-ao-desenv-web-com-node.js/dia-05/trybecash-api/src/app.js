// src/app.js

const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();
/*
No código acima estamos criando as definições do express. Vale ressaltar que a função app.listen() não está sendo executada no arquivo src/app.js. Contudo, estamos realizando um module.exports na constante app que inicializa o express e registra os middlewares que serão utilizados inicialmente.

A razão disso é que quando formos escrever nossos testes de integração, a definição de inicialização, rotas e middlewares do express, devem estar separadas da inicialização dele. Isso nos permitirá criar um mock das nossas rotas facilitando o processo de testar nossa API.

*/
app.use(express.json());
app.use('/people', peopleRoutes);
// Adicionamos esse middleware definindo que toda requisição em que o path comece com /people seja encaminhada para ele.




module.exports = app;