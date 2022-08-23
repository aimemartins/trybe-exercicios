// Questão 01
const dataEmployees = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_')
  return { nome: nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Aime Santana Martins'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Wesley Menezes'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(dataEmployees));
console.log('------------------------------');
// Questão 2

const matchComSorteado = (nApostado, nSorteado) => nApostado === nSorteado
const resultSorteio = (nApostado, matchComSorteado) => {
  const nSorteado = Math.floor(Math.random() * 5) + 1;
  return matchComSorteado(nApostado, nSorteado);
}

console.log(resultSorteio(4, matchComSorteado));

console.log('------------------------------');
// Questão 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

