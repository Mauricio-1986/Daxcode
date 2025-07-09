var prompt = require('prompt-sync')();

console.log ("escolha uma opção 1 - Alcool | 2 - Gasolina | 3 - Diesel");
let cod = parseInt(prompt("escolha um codigo"));
let alcool=0
let gasolina=0
let diesel=0


while(cod != 4){
    if(cod == 1){
        console.log("Alcool");
        alcool = alcool + 1
    }
    else if(cod ==2){
        console.log("Gasolina");
        gasolina = gasolina + 1
}

else if(cod ==3){
    console.log("diesel")
    diesel = diesel + 1

}
else{
    console.log("codigo invalido");
}
    cod = parseInt(prompt("Escolha um codigo"))
}
console.log("Muito obrigado", "\nAlcool" , alcool ,"\ngasolina", gasolina ,"\nDiesel", diesel)