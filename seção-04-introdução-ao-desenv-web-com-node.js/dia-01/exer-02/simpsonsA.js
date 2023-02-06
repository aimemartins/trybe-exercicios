const fs = require('fs').promises;

async function leituraTotalSimpsons() {
  const leitura = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(leitura);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  await leituraTotalSimpsons();
}

main();