const fs = require('fs').promises;
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function replaceNelson() {
  const leitura = await fs.readFile('./simpsonsFamily.json', 'utf8');
  const string = JSON.parse(leitura);
  const arraySemNelson = string.filter((personagem) => personagem.name !== 'Nelson Muntz');
  const newArray = [...arraySemNelson, { id: '15', name: 'Maggie Simpson' }];

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));

}

function main() {
  replaceNelson();
}

main();
