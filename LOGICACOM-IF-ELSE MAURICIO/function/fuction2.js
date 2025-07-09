
function pedirpizza(ligar){
    console.log("um pedido é feito");

    setTimeout(()=>{ ligar();
        console.log("a pizza chega");
    

    },4000)
    

}
pedirpizza(()=>{
    console.log(" o cliente é avisado");
});