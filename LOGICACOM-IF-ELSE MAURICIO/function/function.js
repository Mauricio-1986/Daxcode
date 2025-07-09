
var prompt= require("prompt-sync")();

function mostrarmensagem (resposta){
      console.log("voce esta estudando programação ?");
     setTimeout(()=>{
        resposta()

     },4000 )

      


}


mostrarmensagem(()=> (console.log(" sim estou em logica de programçao")));
