var prompt = require('prompt-sync')()


let codigoPeca1 = (parseInt(prompt("digite o codigo da peça 1")));
let numeroPeca1 = (parseInt(prompt("digite o quantidade da peça")));
let valorUnidade1 = (parseInt(prompt(" digite o valor da peça 1")));

let codigopeca2 = (parseInt(prompt("digite o codigo da peça 2")));
let numeropeca2 = (parseInt(prompt("digite o quantidade peca 2 ")));
let valorunidade2 = (parseInt(prompt("digite o valor peça 2")));

let total = (numeroPeca1 * valorUnidade1) + (numeropeca2 * valorunidade2)


console.log('valor a pagar ',total);

