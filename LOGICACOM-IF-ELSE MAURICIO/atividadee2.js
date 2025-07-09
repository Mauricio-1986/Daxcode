var prompt = require('prompt-sync')()

let nota1=  (parseInt(prompt("digite o numero da nota1")));
let nota2= (parseInt(prompt("digite o numero da nota2")));
let nota3 = (parseInt(prompt("digite o numero da nota3")));
let media = (nota1 + nota2 + nota3)/3

if(media >+ 7){
    console.log("aprovado", media);
}else if (media >= 5 && media <7){
    console.log ("recuperaçao");
    let recuperacao = perseint("digiote sua nota da recuperacao")
    let novamedia = (media + recuperacao) 
}else{
    console.log ("reprovado")
}
