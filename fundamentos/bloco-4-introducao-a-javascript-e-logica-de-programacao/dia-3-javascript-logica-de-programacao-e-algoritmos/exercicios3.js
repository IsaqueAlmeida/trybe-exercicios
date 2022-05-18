//-------Funções--------

/*let nome = ['Adriele', 'Isaque', 'João', 'Ivonete'];

function bomDiaTrybe(nome){
    console.log('Bom dia, ' + nome);

    return bomDiaTrybe;
}

console.log('Bom dia, ' + nome);*/

//-------------Funções sem parâmetros--------

/*function bomDia(){
    return 'Bom dia';
}

console.log(bomDia());*/

//--------------Funções.2 sem parâmetros-------

let status = 'deslogado';

/*function logarDeslogar(){
    if(status === 'deslogado'){
        status = 'Logado';
    } else{
        status = 'Deslogado';
    }
}

console.log(status);

logarDeslogar();
console.log(status);

logarDeslogar();
console.log(status);

console.log('O usuário está ' + status);*/

//-------Funções usando parâmetros-------

/*function sum(a, b){
    return a + b;
}

console.log(sum(2, 3));*/

//--------Funções usando parâmetros-------

//Saber qual o número é maior:

function maiorNUm(primeiroMaior, segundoMaior){
    if(primeiroMaior > segundoMaior){
        return primeiroMaior + ' é maior que o ' + segundoMaior;
    } else if(segundoMaior > primeiroMaior){
        return segundoMaior + ' é maior que o ' + primeiroMaior;
    }else {
        return 'Os números são iguais';
    }
}

console.log(maiorNUm(10, 10.1));
console.log(maiorNUm(11, 10));
console.log(maiorNUm(10, 10));