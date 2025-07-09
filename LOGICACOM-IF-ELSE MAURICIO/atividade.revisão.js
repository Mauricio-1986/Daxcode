var prompt = require('prompt-sync')();

let salario = parseFloat(prompt("digite o salario"));

if( salario <= 2.000 ){
    console.log("isento")
}
else if (salario >= 2000.01 && salario <= 3000.01){
    salario = salario * 0.08
    console.log("valor do imposto a ser pago é", salario)
}
else if (salario >= 3000.01 && salario <= 4500.00){
    salario  * 0.08 + 0.18 
    console.log ("valor do imposto a ser pago é", salario)
}