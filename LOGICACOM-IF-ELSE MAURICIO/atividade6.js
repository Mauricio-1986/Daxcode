var prompt = require('prompt-sync')()
let numero = parseInt(prompt("digite seu numero"));
 if(numero % 2 ==0 || numero == 0 ){
    console.log("par");

 }else if (numero %2 < 0){
    console.log("impar");
 }else{
    console.log("numero não valido")
 }