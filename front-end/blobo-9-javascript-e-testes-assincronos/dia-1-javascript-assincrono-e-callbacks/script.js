// // pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// // Saída:
// // [ 1, 2, 3 ]


// Agora, vamos colocar assincronicidade em nosso código com o setTimeout.


// // pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// // Saída:
// // [2, 3]

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:
// [ 2, 3, 1 ]


