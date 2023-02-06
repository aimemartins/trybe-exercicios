const fs = require('fs').promises;

// recebe um id de personagem e retorna uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

async function handleId(id) {
  const leitura = await fs.readFile('./simpsons.json', 'utf8');

  const simpsons = JSON.parse(leitura);
  const findId = simpsons.find((personagem) => Number(personagem.id) === id);

  if (!findId) {
    throw new Error('Esse Id não foi encontrado!')
  } else {
    return findId;
  }

};

async function main() {
  console.log(await handleId(100));

}

main();