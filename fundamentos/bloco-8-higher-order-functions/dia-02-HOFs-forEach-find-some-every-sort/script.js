console.log('--------------------------Usando forEach - --------------');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multPor2 = (number, index) => {
  numbers[index] = number * 2
};

numbers.forEach(multPor2);
console.log(numbers);

console.log('--------------------------Usando forEach - --------------');

// Exemplo 02
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

console.log('--------------------------Usando forEach --Para Fixar 01 --------------');

//--------------------------------- Para fixar 01

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);

console.log('--------------------------Usando .find--Para Fixar 01--------------');

const numeros = [19, 21, 30, 3, 45, 22, 15];

// -------1 FORMA DE FAZER:
// const findDivisibleBy3And5 = (numero) => (numero % 3 === 0 && numero % 5 === 0)

// const result = numeros.find(findDivisibleBy3And5);
// console.log(result)

// -------2 FORMA DE FAZER:

const findDivisibleBy3And5 = () => {
  return numeros.find((numero) => numero % 3 === 0 && numero % 5 === 0);
};
console.log(findDivisibleBy3And5());

console.log('--------------------------Usando .find--Para Fixar 02--------------');
// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const namess = ['João', 'Irene', 'Fernando', 'Maria'];
// ---------------1 FORMA DE FAZER

// const findNameWithFiveLetters = (item) => {
//   // Adicione seu código aqui:
//   if (item.length === 5) {
//     return true
//   } else {
//     return false
//   }
// }
// const resolucao = namess.find(findNameWithFiveLetters)
// console.log(resolucao);

// ---------------2 FORMA DE FAZER

const findNameWithFiveLetters = () => {
  return namess.find((name) => name.length === 5)
};
console.log(findNameWithFiveLetters());

console.log('--------------------------Usando .find--Para Fixar 03--------------');
// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
// //-------------------------------- 1 FORMA DE FAZER:
// function findMusic(id) {
//   // Adicione seu código aqui
//   if (id.id === '31031685') {
//     return id.title
//   }
// }
// const qualMusica = musicas.find(findMusic)
// console.log(qualMusica);
// console.log(findMusic('31031685'));

//-------------------------------- 2 FORMA DE FAZER:

function findMusic(id) {
  return musicas.find((musica) => {
    return musica.id === id
  })
};
console.log(findMusic('31031687'));
