let idade = 15
let msg1 = "se tiver 18 anos ou mais pode entrar"
let msg2 = "se voce tem 17 ou 16 pode entrar com acompanhate"
let msg3 = "se voce tem 15 não pode entar"
let resultado = (idade>=18) && msg1 || (idade<=17) && msg2 || (idade <= 16) && msg3
console.log (resultado)



