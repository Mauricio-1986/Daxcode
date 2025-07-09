var prompt = require('prompt-sync')();
let n2;
let = continuar = "ALGO"
let operador = null;
let n1 = parseFloat(prompt("digite n1"))
let calculo = n1

while(continuar != "="){
    operador = prompt("operador???")
    n2 = parseFloat(prompt("digite n2"))

    
    switch (operador){
        case ("+"):
            calculo = calculo + n2;
            break;
             case ("-"):
                calculo = calculo - n2;
                break;
                case("*"):
                calculo = calculo * n2;
                break;
                case("/"):
                if (n2 == 0){
                    console.log("Erro não é possivél dividir por zero");
                }
                else{
                    calculo = calculo /n2
                }
                break;
                case("**"):
                calculo = calculo ** n2;
                break;

                case("%"):
                calculo = calculo % n2;
                break;
                default:
                    console.log("Operação invalida, por favor digite opção correta");

    }
    continuar = prompt ("digite '=' para sair ou qualquer tecla para seguir");
}
console.log(calculo);
