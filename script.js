function teste () {

    const nome = prompt("Escreva o seu nome:");
    const endereco = prompt("Escreva o seu endereço:");
}

function select_pedido(pedido , secao){
    //console.log(secao);
    let x = document.querySelector( secao +'  .tag');
    //console.log(x);
    let y = document.querySelector(secao +' .tag ion-icon' );
    
    const anota =  document.querySelector(pedido);
    const marca = document.querySelector(pedido+" ion-icon" );
    if (x !== null) {
        x.classList.toggle("tag");
        y.classList.toggle("hide");
    } 
        anota.classList.toggle("tag");
        marca.classList.toggle("hide");
    

    
    
   
    //console.log(marca);
    
    
}