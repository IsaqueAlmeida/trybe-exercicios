

function text(){
    let addTexto = document.getElementsByTagName('p')[1];
    addTexto.innerText = "Me vejo trabalhando na área que amo, programador, ajudando os meus familiares, a minha namorada e no meu lugarzinho, apartamento, conseguindo tudo o que penso através do meu esforço e dos estudos na Trybe que está me fazendo a ver o quanto tenho ainda mais potencial para conseguir o que quero, sonho e busco."
}

text();

function cor(){
    let mudarCor = document.getElementsByClassName('main-content')[0];
    mudarCor.style.background = "rgb(76, 164, 109)";
}

cor();

function red(){
    let mudarRed = document.getElementsByClassName('center-content')[0];
    mudarRed.style.background = "white";
}
red();

function h1() {
    let mudaH1 = document.getElementsByTagName('h1')[0];
    mudaH1.innerText = "#vqv Esse é o meu relato"
}
h1();

//Mudar todo o texto para maiúscula:
function maiuscula() {
    let mudarMaiuscula = document.getElementsByTagName('p')[1];
    mudarMaiuscula.innerText = mudarMaiuscula.innerText.toUpperCase();
}
maiuscula();