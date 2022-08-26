// Exercício Bônus 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let inputLine = '';
let símbolo = '*'
//
for (index = 0; index < n; index += 1) {
    inputLine = inputLine + símbolo
};
for (index = 0; index < n; index += 1) {
    console.log(inputLine)
};
console.log('---------------------------------')
// Exercício Bônus 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let size = 5;
let inserirSimbolo = '';
let symbol = '*'
for (index = 0; index <= size; index += 1) {
    console.log(inserirSimbolo) 
    inserirSimbolo = inserirSimbolo + símbolo
}

console.log('---------------------------------')



