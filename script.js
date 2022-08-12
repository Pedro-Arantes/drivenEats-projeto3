let count = 0;

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
        count -- ;
    } 
        anota.classList.toggle("tag");
        marca.classList.toggle("hide");
        count ++;
    
        if (count === 3) {
            ativaButao();
            coloreButao();
        }
    
    
   
    //console.log(count);
    
    
}
function ativaButao(){
    const butao = document.querySelector("button");
    butao.innerHTML = "Fechar pedido";
    butao.outerHTML =  `<button class="btn-cinza" onclick="teste()">Fechar pedido</button>`;
    console.log(butao.outerHTML);
    
    
}
function coloreButao(){
    const butao = document.querySelector("button");
    butao.classList.remove("btn-cinza");
    butao.classList.add("btn-verde");
   
}
