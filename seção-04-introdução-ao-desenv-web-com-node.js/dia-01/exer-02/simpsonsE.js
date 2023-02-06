const fs = require('fs').promises;

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function createNewCharacter() {
  const leitura = await fs.readFile('./simpsonsFamily.json', 'utf8');
  const string = JSON.parse(leitura);
  string.push({ id: "8", name: "Nelson Muntz" });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(string));

}

function main() {
  createNewCharacter();
}

main();