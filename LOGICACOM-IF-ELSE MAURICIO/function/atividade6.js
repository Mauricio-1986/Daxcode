
function mensagem1(mensagem){
    console.log("você esta estudando programação ?");
    setTimeout(()=>{
        mensagem()

    },3000)

}
function respostamensagem(){
    console.log("sim estou em logica de programação");
}
mensagem1(respostamensagem);