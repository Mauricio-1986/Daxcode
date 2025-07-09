var prompt = require('prompt-sync')();
let p1 = 2
let p2 = 3
let p3 = 5
let somadepeso = p1 + p2 + p3
for(repeticao = 1; repeticao > 0;repeticao --){
    let valor1 = Number(prompt("digite os valores"));
    let valor2 = Number(prompt("digite os valores"));
    let valor3 = Number(prompt("digite os valores"));

    let media = (valor1*p1) + (valor2*p2) +(valor3*p3);
    let mediaponderada = (media /somadepeso).toFixed(1);
    console.log(mediaponderada);
}
