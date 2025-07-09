var prompt = require('prompt-sync')()
let plano = 50
let minutos = 100

let pagar = parseInt(prompt("saida"))
let total = (pagar - minutos)*2 + 50 
if (pagar > minutos){
    console.log("passou do limite", total);
}else{
    console.log("pagar taxa");
    
}

