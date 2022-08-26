// 1 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (array, nomeQualquer) => {
  return array.some((name) => { 
    return currentName === name
  });
};

console.log(hasName(names, 'Ana'));

// PARA ENTENDER
// array : é a constante que contém o array com os nomes;
// nomeQualquer: é o nome que eu escolhi para pesquisar na const array;
// name : é o elemento de const array;

// Todos esses nomes são criados dentro da função para posteriormente poder ser substituídas por outras funções e variáveis. Isso á torna mais dinâmica.

