function mensagem1(mensagem){
    console.log("gostaria de pedir uma pizza")
    setTimeout(()=>{
    console.log("Saindo para entrega")

    },3000)
    setTimeout(()=>{
        mensagem()
    },4000)
}



function mensagem3(mensagem){
    console.log("senhor boa, noite sua pizza chegou")
}
mensagem1(mensagem3)