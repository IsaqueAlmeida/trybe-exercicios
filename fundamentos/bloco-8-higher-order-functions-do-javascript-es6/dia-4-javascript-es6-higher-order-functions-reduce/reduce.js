// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const aA = () => {
  return names.reduce((name, curr) => name + curr.split('').reduce((acu, cor) => {
    if (cor === 'a' || cor === 'A') return acu + 1; return acu;
  }, 0), 0);
};
console.log(aA());

module.exports = aA;