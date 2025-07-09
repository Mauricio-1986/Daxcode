var prompt = require('prompt-sync')();
let continuar = ''
while(continuar != "n");{
let celsius = Number(prompt("digite a temperatura em celsius"));
let F =((9 *celsius/5 )+ 32).toFixed(1);
console.log("equivalente em fahrenheit:", F);
continuar = prompt("deseja repetir(s/n")
}
