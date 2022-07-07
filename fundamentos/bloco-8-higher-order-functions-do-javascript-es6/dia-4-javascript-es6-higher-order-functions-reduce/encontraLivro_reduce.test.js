const encontraLivro = require('./encontraLivro_reduce.js');

describe('Analisando o nome maior de livros', () => {
  test('A resposta tem que ser "As Crônicas de Gelo e Fogo"', () => {
    const book =
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
          name: 'George R. R. Martin',
          birthYear: 1948,
        },
        releaseYear: 1991,
      }
    expect(encontraLivro()).toEqual(book);
  })
});
l