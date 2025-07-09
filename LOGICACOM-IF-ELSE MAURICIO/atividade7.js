var prompt = require('prompt-sync')()
let A = parseInt(prompt("digite A"));
let B = parseInt(prompt("digite B"));
if(A%B == 0 || B%A == 0){
    console.log("são multiplos");
}else if(A%B !=0 || B%A !=0);{
    console.log("não são multiplos");
}



