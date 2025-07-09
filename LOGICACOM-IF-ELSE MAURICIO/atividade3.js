var prompt = require('prompt-sync')();
let opcao = parseInt(prompt("escolha a moeda 1 USD - 2 EUR - 3 GBP"))
let real = parseFloat(prompt("digite o valor em real"))
let USD = 5.74
let EUR = 5.50
let GBP = 6.30


switch(opcao){
    case 1:
        let taxa = (real/USD).toFixed(2)
        console.log(taxa)
        break;
        
        case 2:
            let taxa2 = (real/EUR).toFixed(2)
            console.log(taxa)
            break;

            case 3:
                let taxa3 = (real/GBP).toFixed(2)
                console.log(taxa)
                break;
                default:
                    console.log('valor nao encontrado');}

