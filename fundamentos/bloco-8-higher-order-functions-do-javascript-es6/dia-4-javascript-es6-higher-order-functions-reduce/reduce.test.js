const aA = require('./reduce.js');

describe('Analisando quantas letras minúscula e maiúscula a existem', () => {
  test('Quantas letras a e A existem', () => {
    expect(aA('a', 'A')).toEqual(20);
  });
});
