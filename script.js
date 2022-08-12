let count = 0;
let  prato = "";
let  bebida = "";
let  doce = "";
let  prato_preco =  0;
let  bebida_preco =  0;
let  doce_preco =  0;
let total = 0;

function teste () {
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
    let x = document.querySelector( secao +'  .tag');
    //console.log(x);
    let y = document.querySelector(secao +' .tag ion-icon' );
    let z = document.querySelector(secao +" "+pedido +'  h4' );
    let w = document.querySelector(secao +" "+pedido+' strong' );
    //console.log(pedido);
    //console.log(secao);
    //console.log(z);
    const anota =  document.querySelector(pedido);
    const marca = document.querySelector(pedido+" ion-icon" );
    if (x !== null) {
        x.classList.toggle("tag");
        y.classList.toggle("hide");
        count -- ;
    } 
        anota.classList.toggle("tag");
        marca.classList.toggle("hide");
        if (secao === ".prato") {
            prato = z.innerHTML;
            prato_preco = w.innerHTML;
        } else if (secao === ".sobremesa") {
            doce= z.innerHTML;
            doce_preco = w.innerHTML ;
        }  if (secao === ".bebida") {
            bebida = z.innerHTML;
            bebida_preco = w.innerHTML;
        } 
        
        console.log(prato);
        console.log(prato_preco);
        
        count ++;

        if (count === 3) {
            calculaTotal();
            ativaButao();
            coloreButao();
        }
    
    
   
    //
    
    
}
function ativaButao(){
    const butao = document.querySelector("a");
    butao.innerHTML = "Fechar pedido";
    butao.outerHTML =  `<a class="btn-cinza" onclick="teste()">Fechar pedido</a>`;
    console.log(butao.outerHTML);
    
    
}
function coloreButao(){
    const butao = document.querySelector("a");
    butao.classList.remove("btn-cinza");
    butao.classList.add("btn-verde");
   
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
