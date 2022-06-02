//Adicionando a tag h1 - Exercícios 5.2 - JavaScript DOM como filho da tag body:

    //Lógica de programação:

        //primeiro criamos uma function;

        //depois criamos uma variável com o createElement para adicionar o h1;

        //Logo após criamos o texto do h1 com o innerText;

        //no final utilizamos o document.body.appenchild para o h1 ser finalizado na sua criação.

function h1() {
    let criaH1 = document.createElement('h1');
    criaH1.innerText = 'Exercício 5.2 - JavaScript - DOM';

    document.body.appendChild(criaH1);
}
h1();

    //Lógica de Programação:

        //primeiro criamos a tag 'main';

        //depois add na className = 'main-content';

        //por último levamos ela até a tag body como;

        //filho utilizando o document.body.appendChild();

function addMain() {
    //Criação da tag 'main'
    let main = document.createElement('main');
    main.className = 'main-content';

    //criação da tag 'section'
    let section = document.createElement('section');
    section.className = 'center-content';
    main.appendChild(section);

    //criação da tag 'p'
    let p = document.createElement('p');
    p.innerText = 'Olá, terráqueos!!';
    section.appendChild(p);

    //criação da segunda 'section' como filho da 'main'
    let section2 = document.createElement('section');
    section2.className = 'left-content';
    main.appendChild(section2);

    //criação da terceira 'section' como filho da 'main'
    let section3 = document.createElement('section');
    section3.className = 'right-content';
    main.appendChild(section3);

    //adicionando uma image na 'section2'
    let image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    image.className = 'small-image';
    section2.appendChild(image);

    //Adicionando uma lista ordenada 'ul' na section3
    let naoOdernada = document.createElement('ul');
    section3.appendChild(naoOdernada);

    let number = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

    for (let index in number) {
        let list = document.createElement('li');
        list.innerText = number;

        naoOdernada.appendChild(list);
    }

    //Criando três tags 'h3'
    for (let index = 1; index <= 3; index += 1) {
        let h3 = document.createElement('h3');
        h3.innerHTML = 'Meus O V O S ' + index;
        main.appendChild(h3);
    }

    document.body.appendChild(main);
}
addMain();