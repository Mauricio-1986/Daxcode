let peso = 85
let altura = 1.65

let imc = peso/altura**2

let validar = imc < 18.5 && "abaixo do peso" || (imc >=18.5 || imc <=24.9) && "peso normal"

console.log (validar)
console.log (imc)