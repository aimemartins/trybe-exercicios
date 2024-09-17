// src/db/connection.js
/* No trecho de código acima estamos importando a biblioteca mysql2 com o recurso de promises. Isso permitirá utilizar o MySQL de forma assíncrona com async/await. Em seguida, criamos uma constante connection que recebe um pool de conexões criado com a função createPool.

Um pool de conexões é um repositório que contém um conjunto de conexões estabelecidas previamente com o banco de dados. Essas conexões serão reutilizadas durante a execução da aplicação conforme a necessidade. Em outras palavras, quando uma operação no banco de dados for necessária nossa aplicação irá:

Requisitar uma conexão no pool de conexões;
Utilizar essa conexão para enviar uma operação SQL ao servidor MySQL;
Devolver a conexão para o pool de conexões ao final da operação com o MySQL;
Tornar a conexão disponível para ser utilizada em requisições futuras. */

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

module.exports = connection;