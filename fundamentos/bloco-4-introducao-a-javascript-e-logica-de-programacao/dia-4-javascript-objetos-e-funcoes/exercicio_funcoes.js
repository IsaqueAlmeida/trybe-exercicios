//Exercicio 1 - Palíndrome:
function palindrome(palavra){
    for(let index in palavra){
        if(palavra[index] !== palavra[(palavra.length - 1) - index]){
            return false;
        }else {
            return true;
        }
    }
}

function palindrome2(string){
    let reverse = string.split('').reverse().join('');
    if(reverse === string){
        return true;
    }else {
        return false;
    }
}
/*console.log(palindrome('arara'));
console.log(palindrome2('arara'));*/

//Exercício 2 - Encontrando o número maior:

function verifica(array){
    let maiorNumero = 0;
    for(let index in array){
        if(array[maiorNumero] < array[index]){
            maiorNumero = index;
        }
    }
    return maiorNumero;
}

/*console.log(verifica([1, 3, 6, 7, 10, 1]));*/

//Exercício 3 - Verifica o menor número:

function verifica2(array2){
    let menorNumero = 0
    for(let index in array2){
        if(array2[menorNumero] > array2[index]){
            menorNumero = index;
        }
    }
    return menorNumero;
}

/*console.log(verifica2([2, 4, 6, 7, 10, 0, -3]));*/

//Exercício 4 - Retornando o nome com maior quantidade de caracteres
function variavel(nomes){
    let maiorCaractere = nomes[0];
    for(let index in nomes){
        if(maiorCaractere.length < nomes[index].length){
            maiorCaractere = nomes[index];
        }
    }
    return maiorCaractere;
}

/*console.log(variavel(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));*/

//Exercício 5 - retornando o inteiro que mais se repete

function inteiro(numeros){
    let contNum = 0;
    let contInteiro = 0;
    let verifica = 0;
    for(let index in numeros){
        let verifica2 = numeros[index];
        for(let index2 in numeros){
            if(verifica2 === numeros[index2]){
                contNum += 1;
            }
        }
        if(contInteiro > contNum){
            contNum = contInteiro;
            verifica = index;
        }
        contInteiro = 0;
    }
    return numeros[verifica];
}

console.log(inteiro([2, 3, 2, 5, 8, 2, 3]));