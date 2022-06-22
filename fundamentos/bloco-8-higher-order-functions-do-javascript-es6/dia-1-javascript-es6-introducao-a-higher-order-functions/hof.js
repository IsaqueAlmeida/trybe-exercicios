/* const myEmail = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

const recebe = (callBack) => {
  const name = {
  id1: callBack('Adriele Santos'),
  id2: callBack('Isaque Almeida'),
  id3: callBack('Luciano Júnior'),
  };
  return name;
};

console.log(recebe(myEmail)); */
/* ---------------------------------------------------------------- */

//DESAFIO 2
const number = (meuNumero, numero) => meuNumero === numero;

//Verificando o número aleatório
const numberRandom = (meuNumero, callBack) => {
  const recebe = Math.floor((Math.random() * 5) + 1) ;
  return callBack(meuNumero, recebe) ? 'Parabéns você ganhou"' : 'Tente novamente!';
};

console.log(numberRandom(5, number));


