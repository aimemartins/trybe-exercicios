const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

/* 
Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
 1) Todos os alunos que estudam pela manha (turno: 'Manhã') - usar .filter para filtar todos da manhã
 2) Retornar o nome (nome:) e sobrenome (sobrenome:) - usar .map em .filter para imprimir todos os nomes e sobrenomes que estudam pela manhã */


const allNameStudents = () => {
  return estudantes.filter((estudante) => {
    return estudante.turno === 'Manhã'
  }).map((estudante) => {
    return `${estudante.nome} ${estudante.sobrenome}`
  })
}
console.log(allNameStudents());

console.log('-------------------------------------------------');

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// 1) Buscar pelo nome pesquisado em estudante.nome - .find pq é só uma pessoa
// 2) Retornar todas as materias - .map em .find pq dessa pessoa eu quero as materias que é o estudante.materiais.

// 1 FORMA DE FAZER:
const findStudant = (nomePesquisado) => estudantes
  .find((estudante) => estudante.nome === nomePesquisado)
  .materias.map((materia) => `${materia.name} : ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`);

console.log(findStudant('Maria'));

// 2 FORMA DE FAZER: Para o .find eu crio uma const para armazenar a informação

const reportStatus = (name) => {
  const studentInfo = estudantes.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => (
    `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Natalia'));
