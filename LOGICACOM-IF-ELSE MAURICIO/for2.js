var prompt = require ('prompt-sync')();

let n = parseInt(prompt("digite number: "));//quantos quer cadastrar

let inn= 0;
let out = 0;

for(let i=0; i<n; i++){ // toda vez que digita ele guarda em i, até que chegue em i<n
    let x = parseInt(prompt(`Dig o ${i+1} numero:`)); //digitando os numeros
    
        if(x>= 10 && x<=20){
            inn++; //todo numero dentro do intervalo ele soma +1
        }else{
            out++;
        }
}
console.log(`${dentro} dentro do intervalo.`);
console.log(`${fora} fora do intervalo.`);
