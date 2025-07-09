var prompt = require('prompt-sync')();

function calcularMedia(not1,not2,not3){
return (not1+not2+not3)/3

}
let not1 = parseFloat(prompt("Digite a nota1"))
let not2 = parseFloat(prompt("Digite a nota2"))
let not3 = parseFloat(prompt("Digite a nota3"))
let resultado = calcularMedia(not1,not2,not3)
console.log(resultado)
calcularMedia()
function verificarAprovacao(resultado){
    console.log(resultado>=6 && "Aprovado")

    console.log(resultado<6 && "Aprovado")
}
verificarAprovacao()