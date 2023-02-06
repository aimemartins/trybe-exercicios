const fs = require('fs').promises;

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function ReadAndRemoveId() {
  const leitura = await fs.readFile('./simpsons.json', 'utf8');
  const string = JSON.parse(leitura);
  const newArray = string.filter((personagemId) => personagemId.id !== '10' && personagemId.id !== '6');

  // reescrever o simpsons.json com as informações depois de ter retirado o id 10 e 6

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

};

function main() {
  ReadAndRemoveId();
}

main();