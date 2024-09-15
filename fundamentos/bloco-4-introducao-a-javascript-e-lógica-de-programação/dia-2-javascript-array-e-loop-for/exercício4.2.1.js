let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("Primeira Questão:")
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

console.log('--------------------');

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let somatorio = 0;
for (let index = 0; index < numbers.length; index += 1) {
    somatorio = somatorio + numbers[index++]
}

console.log('Segunda Questão: A soma de todos os arrays de numbers é:', somatorio);

console.log('--------------------');
// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = somatorio / numbers.length

console.log('Terceira Questão: A média aritmética dos números do array numbers é:', mediaAritmetica)

console.log('--------------------');

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritmetica > 20) {
    console.log('Quarta Questão: valor maior que 20')
} else {
    console.log('Quarta Questão: valor menor ou igual a 20')
}
console.log('--------------------');
// 5 -  Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = Number.NEGATIVE_INFINITY;
for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
}
console.log('Quinta Questão: O maior valor do array numbers é:', maiorValor)

console.log('--------------------');

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numImpares = [];
for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        numImpares.push(numbers[index])
    }
}

if (numImpares.length === []) {
    console.log("Sexta Questão: nenhum valor ímpar encontrado")
} else {
    console.log("Sexta Questão:",numImpares.length, 'números do array numbers são números ímpares')
}
console.log('--------------------');
 //PROBLEMA A SER RESOLVIDO // 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = Number.POSITIVE_INFINITY;
for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index]
    }
}
console.log('Sétima Questão: O menor valor do array numbers é:', menorValor)

console.log('--------------------');

 //8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array =[];
 for (let index = 1; index <=25; index += 1) {
    array.push([index])
 }
console.log("Oitava Questão:",array)

console.log('--------------------');
// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let arrayDivPor2 = [];
for (let indice = 0; indice < array.length ; indice += 1) {
    arrayDivPor2.push(array[indice] / 2)
}
console.log("Nona Questão:",arrayDivPor2)