var prompt = require('prompt-sync')();
let n = parseInt(prompt("digite o numero: "));
if(n >= 1 && n <=1000){
    for(let i = 1; i <= n ; i ++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}