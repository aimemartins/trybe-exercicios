// Primeira Questão
const a = 2;
const b = 5;
const c = 9;
let adicao = a + b;
let subtracao = a - b;
let multuplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

//console.log(adicao);
//console.log(subtracao);
//console.log(multuplicacao);
//console.log(divisao);
//console.log(modulo);

// Segunda Questão

// if (a > b) {
//   console.log(a)
//} else {
//  console.log(b)
//}
// Terceira Questão

if (a > b && a > c) {
    console.log("O maior entre os três números é o:", a);
} else if (b > a && b > c) {
    console.log("O maior entre os três números é o:", b);
} else {
    console.log("O maior entre os três números é o:", c);
}

// Quarta Questão

const num = -2;

if (num === 0) {
    console.log("zero")
} else if (num >= 1) {
    console.log("positive")
} else {
    console.log("negative")
}


// Quinta Questão

const angA = 72;
const angB = 70;
const angC = 40;
const triValid = angA + angB + angC;

if (angA < 0 || angB < 0 || angC < 0) {
    console.log("Erro!")
} else if (angA + angB + angC === 180) {
    console.log(true)
} else {
    console.log(false)
}

// Sexta Questão

let pecaXadrez = 'Rei';

switch (pecaXadrez) {

    case ('Rei'):
        console.log("Movimentos do Rei");
        break;
    case ('Rainha'):
        console.log("Movimentos da Rainha");
        break;
    case ('Bispo'):
        console.log("Movimentos da Bispo");
        break;
    default:
        console.log("ERRO");
}

// Sétima Questão
let nota = 90;

if (nota < 0 || nota > 100) {
    console.log("ERRO")
} else if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B")
} else if (nota >= 70) {
    console.log("C")
} else if (nota >= 60) {
    console.log("D")
} else if (nota >= 50) {
    console.log("E")
} else {
    console.log("F")
}

// Oitava Questão

const d = 4;
const e = 12;
const f = 10;

if (d % 2 === 0 || e % 2 === 0 || f % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}
// Nona Questão

if (d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

// Décima Questão

const valorCusto = 10;
const impostoSobreCusto = valorCusto * (20 / 100);
const valorCustoTotal = valorCusto + impostoSobreCusto;
const valorVenda = 22;
const lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro!")
} else {
    console.log(lucro * 1000)
}

// Décima Primeira Questão

let salarioBruto = 3000;
let salarioDescInss = 0;

if (salarioBruto < 1556.94) {
    salarioDescInss = salarioBruto - (8 / 100) * salarioBruto
} else if (salarioBruto < 2594.92) {
    salarioDescInss = salarioBruto - (9 / 100) * salarioBruto
} else if (salarioBruto < 5189.82) {
    salarioDescInss = salarioBruto - (11 / 100) * salarioBruto
} else if (salarioBruto >= 5189.82) {
    salarioDescInss = salarioBruto - 570.88
}
console.log("O salário com o desconto do INSS será de:", salarioDescInss)
let salarioLiq = 0;

if (salarioDescInss <= 1903.98) {
    salarioLiq = salarioDescInss
} else if (salarioDescInss <= 2826.65) {
    salarioLiq = salarioDescInss - (((7.5 / 100) * salarioDescInss) - 142.80)
} else if (salarioDescInss <= 3751.05) {
    salarioLiq = salarioDescInss - (((15 / 100) * salarioDescInss) - 354.80)
} else if (salarioDescInss <= 2826.65) {
    salarioLiq = salarioDescInss - (((22.5 / 100) * salarioDescInss) - 636.13)
} else if (salarioDescInss <= 2826.65) {
    salarioLiq = salarioLiq - (((27.5 / 100) * salarioDescInss) - 869.36)
}

console.log("O salário líquido já com desconto do INSS e do Imposto de Renda é :", salarioLiq)
