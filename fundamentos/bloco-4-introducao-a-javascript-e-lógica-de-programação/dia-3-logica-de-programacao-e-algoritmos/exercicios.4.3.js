// 1- Crie um algoritmo que retorne o fatorial de 10.

let numero = 10;
let fatorial = 1;



for (let index = 1; index <= 10; index += 1) {
    fatorial = fatorial * index
}

console.log('O fatorial de 10! é igual a:', fatorial)

console.log('------------------------------------------------')

// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = "tryber";
let palavraInvertida = '';

for (let index = palavra.length - 1; index >= 0; index -= 1) {
    palavraInvertida = palavraInvertida + palavra[index]
}
console.log("A palavra invertida é", palavraInvertida)

console.log('------------------------------------------------')

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index]
    }
}
console.log('A maior palavra de array é:', maiorPalavra)

console.log('------------------------------------------------')

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// NÃO CONSEGUI RESOLVER

let maiorNumeroPrimo;
let numerosPrimos = [];

for (index = 2; index <= 50; index +=1) {
    if ( numerosPrimos % index ) {

    }

}
//console.log('O maior número primo entre 2 e 50 é:', maiorNumeroPrimo)