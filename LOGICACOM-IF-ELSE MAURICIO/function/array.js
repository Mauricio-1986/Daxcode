var prompt = require("prompt-sync")();
let x =["eder","lucas","felipe"]
let valor = prompt("digite um nome ")
//adicionou o valor final
x.push(valor)
//remove o ultimo valor
x.pop()
//remove o valor inicial
x.shift()
//adiciona o valor no incio
x.unshift(valor)
//mostra o valor total
console.log(x.join(" "))