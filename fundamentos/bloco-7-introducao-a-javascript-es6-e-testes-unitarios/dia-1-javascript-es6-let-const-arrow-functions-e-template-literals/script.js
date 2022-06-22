/* Utilizando let, const, arrow functions e template literals */
/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + 'ótimo, fui utilizada no escopo!';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + 'o que estou fazendo aqui? :0');
} */

/* Colocando em array function */
/* const testingScope = (escopo) => {  
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true); */

/* EXERCÍCIO 2 */
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
 */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemArray = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

console.log(ordemArray()); */

/* Uma outra forma de fazer */
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordemArray = (array) => {
  const sort = array.sort((a, b) => a - b);
  return ordemArray;
}

const result = ordemArray(oddsAndEvens);
console.log(`Os números ${result} se encontram ordenados de forma crescente`); */

/* Uma outra forma */
/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const colocaOrdem = (array) => {
  const ordem = array.sort((a, b) => a - b);
  return ordem;
}

const sortBonus = colocaOrdem(oddsAndEvens);
console.log(`Os números ${sortBonus} se encontram ordenados de forma crescente!`); */

/* 🚀 Crie duas funções JavaScript com as seguintes especificações: */
const mudaFrase = (name) => {
  let phase = 'Tryber x aqui';
  const mudaPhase = phase.split(' ');

  for (let index = 0; index < mudaPhase.length; index += 1) {
    if (mudaPhase[index] === 'x') {
      mudaPhase[index] = name;
    }
  }
  return mudaPhase.join (' ');
};

console.log(mudaFrase('Isaque'));

const habilidadesAprendidas = (habilidades) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let recebeHabilidades = `${habilidades}
  Minhas três principais habilidades são: `;

  skills.forEach((skills) => {
    recebeHabilidades = `${recebeHabilidades} - ${skills}`
  });
  return recebeHabilidades;
};

console.log(habilidadesAprendidas(mudaFrase('Isaque')));
