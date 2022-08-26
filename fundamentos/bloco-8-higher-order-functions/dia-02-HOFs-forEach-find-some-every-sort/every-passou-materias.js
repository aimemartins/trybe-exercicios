// Verifique se o estudante passou em todas as matérias:

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const boletim = (studantGrades) => {
  return studantGrades.every((grade) => { // PQ é preciso colocar Object.values??
    return grade === 'Aprovado'
  })
}

console.log(boletim(grades));

// É criado o studentGrades para que ele possa ser substituido por qualquer função. Se colocássemos no lugar o grades, ele só iria funcionar para essa função. No caso a studentGrades é uma callback.

//ISSO QUE É RETORNADO NO CONSOLE DO NAVEGADOR
// Object.values(grades);
// (3) ['Aprovado', 'Reprovado', 'Aprovado']