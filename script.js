function teste () {

    const nome = prompt("Escreva o seu nome:");
    const endereco = prompt("Escreva o seu endereço:");
}

function select_pedido(pedido){

    let x = document.querySelector('.tag');
    let y = document.querySelector(' .tag ion-icon' );
    
    const anota =  document.querySelector(pedido);
    const marca = document.querySelector(pedido+" ion-icon" );
    if (x !== null) {
        x.classList.toggle("tag");
        y.classList.toggle("hide");
    } 
        anota.classList.toggle("tag");
        marca.classList.toggle("hide");
    

    
    
   
    //console.log(marca);
    //console.log(x);
    
}