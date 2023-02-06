const fs = require('fs').promises;

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function createNewFile() {
  const leitura = await fs.readFile('./simpsons.json', 'utf8');
  const string = JSON.parse(leitura);
  const newArray = string.filter((personagem) => personagem.id <= '4');

  const newFile = await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));

  await fs.readFile('./simpsonsFamily', 'utf8')

}

function main() {
  createNewFile();
}

main();