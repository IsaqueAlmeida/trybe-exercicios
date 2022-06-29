const numeroLivro = require('./numeroLivro_reduce');

describe('Calcular a média das idades dos autores', () => {
  test('Calcular a média das idades dos autores red / tamanho', () => {
    expect(numeroLivro('(red + tamanho) / 2')).toEqual(43);
  })
})