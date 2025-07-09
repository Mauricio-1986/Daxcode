var prompt = require('prompt-sync')();
let num = parseInt(prompt("Digite um numero maior"));
let i =0
while(num>=0){
    console.log(num)
    num = num - 1
    i++
}
console.log("Numero contado foi" , i)