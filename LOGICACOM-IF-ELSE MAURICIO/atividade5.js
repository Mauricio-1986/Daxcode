var prompt = requiere('prompt-sync')()
let numero1 = parseFloat(prompt("DIGITE O NUM1"));
let validar = prompt("escolha as opções + - * / ")
let numero2 = parseFloat(prompt("DIGITE NUM2"));

switch(validar){
    case "+":
        console.log("o resultado da soma é :",numero1 + numero2);
        break;

        case "-":
            console.log("o resultado da subtração é :",numero1 - numero2);
            break;

            case "*":
                console.log("o resultado da multiplicação é :",numero1 * numero2);
                break;

                case "/":
                    console.log("o reultado da divisão é ", numero1 / numero2);
                    break;

                    default:
                    console.log(" valor não encontrado");
}





