var prompt = require('prompt-sync')();
let paciente = [];
let continuar = ''
while(continuar != "sair")
    console.log("1 adicionar cliente\n2 antender cliente\n3 cancelar cliente\n4 sair");
    let opcao = Number(prompt("escolha a opção"));
    if(opcao === 1){
let addpaciente = prompt("digite um nome :");
if(addpaciente !== " ");{
pacientes.push(addpaciente);
console.log(pacientes,"foi adcionado");
    }else{
        console.log("nome invalido");
    }

    
continuar = prompt("deseja continuar (sim/sair)");
console.log(paciente);

}