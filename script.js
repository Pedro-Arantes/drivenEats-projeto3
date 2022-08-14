let count = 0;
let  prato = "";
let  bebida = "";
let  doce = "";
let  prato_preco =  0;
let  bebida_preco =  0;
let  doce_preco =  0;
let total = 0;

function fazerPedido () {
    let msg = `
    Olá,  gostaria de fazer o pedido:  
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${doce}
    Total: R$ ${total}`;

    const msgCode = encodeURIComponent(msg);
    const url_base = `https://wa.me/?text=`;
    const urlFinal = url_base+msgCode;
    const butao = document.querySelector("a");
    
    butao.href = urlFinal;
    //const rpl_prato = prato_preco.replace("R$","");
    //const rplVirg_prato = rpl_prato.replace(",",".")
    
    //const pratoNumber = Number(rplVirg_prato);
    //let daco = pratoNumber;
    //console.log(daco);
   
    
   // const nome = prompt("Escreva o seu nome:");
    //const endereco = prompt("Escreva o seu endereço:");
}

function select_pedido(pedido , secao){
    //console.log(secao);
    let searchPaint = document.querySelector( secao +'  .tag');
    //console.log(x);
    let searchMark = document.querySelector(secao +' .tag ion-icon' );
    let getPedido = document.querySelector(secao +" "+pedido +'  h4' );
    let getPreco = document.querySelector(secao +" "+pedido+' strong' );
    //console.log(pedido);
    //console.log(secao);
    //console.log(z);
    const anota =  document.querySelector(pedido);
    const marca = document.querySelector(pedido+" ion-icon" );
    if (searchPaint !== null    ) {
        searchPaint.classList.toggle("tag");
        searchMark.classList.toggle("hide");
        count -- ;
    } if (anota === searchPaint) {
        searchPaint.classList.toggle("tag");
        searchMark.classList.toggle("hide");
        count -- ;
    }
        anota.classList.toggle("tag");
        marca.classList.toggle("hide");
        
        if (secao === ".prato") {
            prato =getPedido.innerHTML;
            prato_preco = getPreco.innerHTML;
        } else if (secao === ".sobremesa") {
            doce= getPedido.innerHTML;
            doce_preco = getPreco.innerHTML ;
        }  if (secao === ".bebida") {
            bebida = getPedido.innerHTML;
            bebida_preco = getPreco.innerHTML;
        } 
        
        console.log(prato);
        console.log(prato_preco);
        
        count ++;

        if (count === 3) {
            calculaTotal();
            ativaButao();
            coloreButao();
        }else {
            calculaTotal();
            desativaButao();
            descoloreButao();
        }
    
    
   
    //
    
    
}
function ativaButao(){
    const butao = document.querySelector("a");
    butao.innerHTML = "Fechar pedido";
    butao.outerHTML =  `<a class="btn-cinza" onclick="fazerPedido()">Fechar pedido</a>`;
    console.log(butao.outerHTML);
    
    
}
function desativaButao(){
    const butao = document.querySelector("a");
    butao.innerHTML = ` Selecione os 3 itens
    <br>
    para fechar o pedido`;
    butao.onclick = " ";
}
function coloreButao(){
    const butao = document.querySelector("a");
    butao.classList.remove("btn-cinza");
    butao.classList.add("btn-verde");
   
}
function descoloreButao (){
    const butao = document.querySelector("a");
    butao.classList.remove("btn-verde");
    butao.classList.add("btn-cinza");
}
function calculaTotal(){
    const rpl_prato = prato_preco.replace("R$","")
    const rplVirg_prato = rpl_prato.replace(",",".")

    const rpl_bebida = bebida_preco.replace("R$","")
    const rplVirg_bebida = rpl_bebida.replace(",",".")

    const rpl_doce= doce_preco.replace("R$","")
    const rplVirg_doce = rpl_doce.replace(",",".")

    const pratoNumber = Number(rplVirg_prato);
    const bebidaNumber = Number(rplVirg_bebida);
    const doceNumber  = Number(rplVirg_doce);
    total = pratoNumber + bebidaNumber + doceNumber ;
}
