//-------CRIANDO UM OBJETO NO JS--------

//Exercício 1:

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorldId: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

/*console.table(player['bestInTheWorldId']);*/

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorldId.length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro' + ' e ' + player.medals.silver + ' medalhas de prata.');

console.table(player);