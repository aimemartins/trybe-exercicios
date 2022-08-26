const pizzas = [
  { flavor: 'Frango com Catupiry', price: 12.20 },
  { flavor: 'Marguerita', price: 13.50 },
  { flavor: 'Gratinada', price: 15.32 },
  { flavor: 'Quatro Queijos', price: 13.63 }
];

// Retorne TRUE se existir uma pizza com valor menor que 13 e FALSE caso não exista

// const pizzaMenor13 = () => {
//   return pizzas.some((pizza) => {
//     return pizza.price < 13
//   })
// };
// console.log(pizzaMenor13());

// REFATORANDO

const pizzaMenor13 = () => pizzas.some((pizza) =>  pizza.price < 13);

console.log(pizzaMenor13());