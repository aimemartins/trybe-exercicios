
// ------------------- PARTE 01 ----------------------------

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope)
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }

}
testingScope(true);

// Questão 02 - Crie uma função que retorne um array em ordem crescente:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
  let arrayOrdenado = [];
  for (let i = 0; i < oddsAndEvens.length; i += 1) {
    for (let ii = 1; ii < oddsAndEvens.length; ii += 1)
      if (oddsAndEvens[i] < oddsAndEvens[ii])
        arrayOrdenado.push(oddsAndEvens[i])
  }

  return arrayOrdenado
};

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉

// -------------------------PARTE 2---------------------------

// Questão 01 - Crie uma função que receba um número e retorne seu fatorial.


const num = 4;
const fatorial = (num) => {
  let array = [];
  let result = 1
  for (let index = 1; index <= num; index += 1) {
    array.push(index);
    for (let i = 0; i < array.length; i += 1) {
      result = result * array[i];
    }
  };
  return result
};
const imprimir = fatorial(num);
console.log(`Esse é o fatorial ${imprimir}`);

// // Questão 02 - Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

const frase = 'você chegou até aqui!'

function maiorPalavra(frase) {
  let arrayPalavras = [];
  arrayPalavras = frase.split(' ');

  for (let i = 0; i < arrayPalavras.length; i += 1)
  if(arrayPalavras[index].length > )
    return arrayPalavras
}
console.log(maiorPalavra(frase));