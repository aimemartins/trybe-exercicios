const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const exibirHabil = (student) => {
  const habilidade = Object.keys(student);
  const nivelHab = Object.values(student);
  for (const index in habilidade) {
    console.log(`${habilidade[index]}, Nível:${nivelHab[index]}`);
  }
};

exibirHabil(student1);
console.log('-----------------');
exibirHabil(student2);

console.log('-----------------');

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};