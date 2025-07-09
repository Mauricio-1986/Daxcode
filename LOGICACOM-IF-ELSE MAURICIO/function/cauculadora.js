var prompt = require("prompt-sync")();

function somar (a,b){
    return a+b
}
let subitrair= (a,b)=>{
    return a-b
}
let multiplicar= (a,b)=>{
    return a*b
}

function dividir  (a,b){
    if( b===0){
        console.log( "valor nao pode ser dividido");

    }else{
        return a / b
    }
}

function calcular(a,b,operacao ){
    return operacao(a,b)
}

let num1= Number(prompt("digite numero"))
let operacao = prompt("digite a operação - + * /")
let num2= Number(prompt("digite numero2"))

if(operacao =="-"){
    console.log (calcular(num1,num2,subitrair))
}

if(operacao=="+"){
    console.log (calcular(num1,num2,somar))
}

if(operacao == "*"){
    console.log(calcular(num1,num2,multiplicar))
}
if ( operacao== "/"){
    console.log(calcular( num1,num2,dividir))
}



 calcular(
    ()=>(console.log("calculando"))
 )