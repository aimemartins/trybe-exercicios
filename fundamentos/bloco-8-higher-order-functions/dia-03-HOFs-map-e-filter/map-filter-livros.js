const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
console.log('-----------------------------------------------------1')
// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames() {
  return books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`
  });
};

console.log(formatedBookNames());

console.log('-----------------------------------------------------2')

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.



// function nameAndAge() {
//   const info = books.map((book) => {
//     return {
//       author: book.author.name,
//       age: book.releaseYear - book.author.birthYear
//     }
//   })
//   return info.sort((a, b) => {
//     return a.age - b.age
//   })
// };
// console.log(nameAndAge())

// REFATORANDO

function nameAndAge() {
  const info = books.map((book) => {
    return {
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear
    }
  })
  return info.sort((a, b) => {
    return a.age - b.age
  })
};
console.log(nameAndAge())

console.log('-----------------------------------------------------3')
// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter((book) => {
    return book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
  });
};
console.log(fantasyOrScienceFiction());

console.log('-----------------------------------------------------4')

// 🚀 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

function oldBooksOrdered() {
  const infos = books.filter((book) => (2022 - book.releaseYear) > 60);
  return infos.sort((a, b) => {
    return a.releaseYear - b.releaseYear
  })
}
console.log(oldBooksOrdered());

console.log('-----------------------------------------------------5')

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
// 1) Criar um .filter para acessar os generos só de ficcão e fantasia (só com esse, ele retornaria o objeto completo)
// 2) Retornar só os nomes dos autores é preciso usar .map
// 3) Usar um .sort em .filter para organizar

function fantasyOrScienceFictionAuthors() {
  const info = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => {
    return info.includes(book.genre)
  }).map((book) => {
    return book.author.name
  }).sort()

};

console.log(fantasyOrScienceFictionAuthors());

console.log('-----------------------------------------------------6');

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
  const infos = books.filter((book) => (2022 - book.releaseYear) > 60);
  return infos.map((book) => {
    return book.name
  })
};

console.log(oldBooks());

console.log('-----------------------------------------------------7');

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// 1) Buscar: Usar .find para encontrar book.author.name que tenha 3 iniciais
// 2) Retornar Nome do livro (book.name)
// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.filter((book) => {
     return book.author.name[1] === '.'
     && book.author.name[4] === '.'
     && book.author.name[7] === '.'
  })[0].name;
};

console.log(authorWith3DotsOnName())


