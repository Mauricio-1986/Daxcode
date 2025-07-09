var prompt = require('prompt-sync')();

console.log("Digite os nomes das pessoas");
let nome = prompt("digite os nomes");
let nomes = '';
while(nome !== "sair"){
    nome = prompt("digite os nomes");
    nomes = nomes + nome + "\n"

}

console.log(nome);


