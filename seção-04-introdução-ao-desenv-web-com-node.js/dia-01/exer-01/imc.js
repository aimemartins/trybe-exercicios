const readline = require('readline-sync');

const pesoEmKg = 50;
const alturaEmCm = 165;

const calculaIMC = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = peso / alturaAoQuadrado;

  return imc;

}


function main() {
  const peso = readline.questionFloat('Qual o seu peso? (kg)');
  const altura = readline.questionInt('Qual a sua altura? (cm)')

  const imc = calculaIMC(peso, altura);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();