//Calculando o fatorial 10:

//primeiro criando uma variável com o nome fatorial;

//segundo cria outra variável que receberá esse valor;

//terceiro cria uma outra variável para ser subtraída por 1;

//Criando um laço for para calcular o que queremos e fazendo o decremento para os valores serem diminuído até chegar no 1;

//usa a segunda variável para a multiplicação dentro do for;

//Por último mostra na tela com o console.log(resultado).

/*let fatorial = 5;
let recebeValor = fatorial;
let resultado = fatorial - 1;
for(let index = resultado; index > 1; index -= 1){
    recebeValor *= index;
}

console.log(recebeValor);*/

//---------INVERTENDO AS PALAVRAS----------

/*let word = 'Banana';
let invertida = word.split('').reverse().join('');
console.log(invertida);*/

//-----------Retornando o maior e a menor palavra-------

/*let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorArray = array[0];
let maiorArray = array[0];

for(let index = 1; index < array.length; index += 1){
    if(array[index].length < menorArray.length){
        menorArray = array[index];
    }
}

for(let index = 1; index < array.length; index += 1){
    if(array[index].length > maiorArray.length){
        maiorArray = array[index];
    }
}

console.log(menorArray);
console.log(maiorArray);*/

//----------------Número Primo------------------

let numeroPrimo = 0;
for(let numeroAtual = 0; numeroAtual <= 50; numeroAtual += 1){
    let ePrimo = true;
    for(let divisor = 2; divisor < numeroAtual; divisor += 1){
        if(numeroAtual % divisor === 0){
            ePrimo = false;
        }
    }
    if(ePrimo){
        numeroPrimo = numeroAtual;
    }
}

console.log(numeroPrimo);
