console.log(localStorage.length);
localStorage.setItem('firstname', 'Adam');//cria o primeiro valor
localStorage.setItem('lastname', 'Smith'); //cria o segundo valor
console.log(localStorage);
console.log(localStorage.getItem('lastname'));//retorna o valor 'Adam';
console.log(localStorage.getItem('firstname'));//retorna o valor 'Smith'
console.log(localStorage.length);//possui duas entradas
console.log(localStorage.removeItem('lastname'));//removeu um dos itens
console.log(localStorage.length);//possui uma entrada popr ter removido um dos itens
localStorage.clear(); //limpa todas as entradas
console.log(localStorage.length);