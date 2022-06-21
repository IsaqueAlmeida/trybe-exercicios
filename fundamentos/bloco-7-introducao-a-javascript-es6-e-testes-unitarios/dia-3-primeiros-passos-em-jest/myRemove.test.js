const myRemove = require('./myRemove');

describe('Requisito 2', () => {
  test('Testanto para ver se o array [1, 2, 3, 4], 3', () => {
    expect(true).toEqual(myRemove([1, 2, 3, 4], 3))
  })
});