let fruit = [3, 4, 10, 1, 12];
let sum = 0

for(let index = 0; index < fruit.length; index += 1){
    sum += fruit[index];
    /*console.log(sum);*/
}

if(sum > 15){
    console.log(sum);
} else{
    console.log("Valor menor do que 16!!");
}

