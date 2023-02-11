// src/server.js
const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
  // O código abaixo é para testarmos a comunicação com o MySQL

  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});

/* 
Acima, criamos uma constante app que importa o que foi definido no arquivo src/app.js e, a partir dessa constante, iniciamos o nosso express executando a função app.listen().

Dentro da função app.listen() foi adicionado um trecho de código que executa a função connection.execute(), que recebe como parâmetro uma consulta SQL SELECT 1. Essa função realiza uma conexão com o MySQL, executa o SQL passado como parâmetro e recebe uma resposta que é armazenada na constante result (note que o processo de desestruturação de variáveis está sendo utilizado! 😎).

Depois é verificado com um if se o objeto result contém alguma coisa e, em caso de positivo, é impresso no console a mensagem MySQL connection OK. Se você for no console e executar o comando npm start, o express será iniciado e apresentará a seguinte saída:

API TrybeCash está sendo executada na porta ${PORT}
MySQL connection OK


Antes de avançarmos, vamos refatorar nosso arquivo src/server.js para retirar o código que utilizamos para testar se a comunicação com o MySQL estava ocorrendo, pois esse código não será mais útil para nós de agora em diante. O arquivo deverá estar assim:
*/