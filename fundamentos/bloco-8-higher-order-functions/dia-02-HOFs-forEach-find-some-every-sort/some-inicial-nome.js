// Verifique se possui algum nome que começa com a letra desejada:

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const inicialLetra = (inicial) => {
//   return listNames.some((nome) => { 
//     return nome[0] === inicial
//   });
// };

// console.log(inicialLetra('M'));

// REFATORANDO

const inicialLetra = (inicial) => listNames.some((nome) => nome[0] === inicial);

console.log(inicialLetra('M'));

console.log('-------------------------------------------------------')
// NO CASO ACIMA, A LISTA COM NOMES É UMA SÓ. E SE TIVESSE MAIS DE UMA LISTA DE NOMES?

const listNames1 = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const listNames2 = ['Aime', 'Wesley', 'Petrus', 'Tulio', 'Veronica'];

// const letraInicial = (letra, lista) => {
//   return lista.some ((nome) => {
//     return nome[0] === letra
//   });
// };

// REFATORANDO

const letraInicial = (letra, lista) => lista.some ((nome) => nome[0] === letra);

console.log(letraInicial('A', listNames1));
console.log(letraInicial('A', listNames2));
