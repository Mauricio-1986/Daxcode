var prompt = require ('prompt-sync')();
function soma(a,b){
    return a + b
}
let subtrair = (a,b)=>{return a - b}
let multiplicar = (a,b)=>{return a * b}
let divisão = (a,b)=>{
    if(b == 0){
        console.log("valor não pode ser dividido")
    }else{
        return (a / b).toFixed(1)
    }
}
let calcular = (a,b , operacao)=>{
    return operacao(a,b)
}
let num1 = Number(prompt("digite o numero 1: "))
let operacao = prompt("digite a operação + - / * ")
let num2 = Number(prompt("digite o numero 2: 25"))

switch(operacao){
    case "+" :
        console.log(calcular(num1, num2, soma))
        break;
        case "-":
        console.log(calcular (num1, num2, subtrair))
        break;
        case "*":
            console.log(calcular(num1,num2,multiplicar))
            break;
            case"/":
            console.log(calcular(num1,num2,divisão))
            break;
            default:"operação invalida";


}
