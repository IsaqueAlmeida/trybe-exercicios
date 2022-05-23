let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    /*recorrente: 'Sim',*/
};

/*console.log(info);*/

//Exercício 1 - boas-vindas:
/*console.log('Bem-vinda, ' + info.personagem);*/

//Exercício 2 - Add uma nova propriedade:
/*info.recorrente = 'Sim';
console.log(info);*/

//Exercício 3 - Mostrando as chaves:
/*for(let key in info){
    console.log(key);
};*/

//Exercício 4 - mostrando os valores das chaves:
/*for(let key in info){
    console.log(info[key]);
}*/

//Exercício 5 - criando um novo objeto:
/*let info = {
    personagem: 'Margarida e Tio Patinhas',
    origem: 'Pato Donald e Christmas on Bear Mountain, Dell`s Four Color Commics #178',
    nota: 'Namorada do personagem principal nos quadrinhos e do Pato Donald e O último Macpatinhas',
};

console.log(info.personagem);
console.log(info.origem);
console.log(info.nota);*/

//Exercicios 6 - Acessando as chaves:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

/*console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '" ');*/


//Exercício 7 - Adicionando um novo valor na chave livrosFavoritos:
/*leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
)*/

/*console.log(leitor);*/

//Exercício 8 - Acessando as chaves do objeto acima:
console.log(' ' + leitor.nome + ', tem ' + leitor.livrosFavoritos.length + ' livros favoritos!');

