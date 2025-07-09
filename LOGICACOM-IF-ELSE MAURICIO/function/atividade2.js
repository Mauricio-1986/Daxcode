var prompt = require('prompt-sync')();

let continuar = ''
let fahrenheit = ''
do{
    let temp = parseInt(prompt("Digite a temperatura em celscius"))
    fahrenheit = 9*temp/5+32

console.log("A temperatura em graus Fahrenheit é" ,(fahrenheit).toFixed(1))

continuar = prompt("Deseja continuar?S/N")

} while(continuar!="N")

console.log("Fico feliz em resolver seu problema, sua temperatura em fahrenheit foi:" , (fahrenheit).toFixed(1))
