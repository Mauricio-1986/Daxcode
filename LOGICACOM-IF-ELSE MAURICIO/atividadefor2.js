var prompt = require('prompt-sync')();
let n = parseInt(prompt("digite o numero: "));
for (let i = 1 ;i <= n ; i++){
    let x = parseInt(prompt("digite os numeros"));
    if ( x >=10 && x <= 20){
        console.log ("in");

    }else{
        console.log("out");
    }
}