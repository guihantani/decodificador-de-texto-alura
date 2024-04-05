let listaEntrada = ['e' ,'i', 'a' ,'o' ,'u']
let listaChave = ['enter' ,'imes', 'ai' ,'ober' ,'ufat']

document.querySelector('.decodificador__saida__caixa').style.display = 'none';
document.querySelector('.botao__copiar').style.display = 'none';

function ativarOuDesativar(){
    if(document.querySelector('.decodificador__entrada__caixa').value.length === 0){
        document.querySelector('.botao__criptografar').disabled = true;
        document.querySelector('.botao__descriptografar').disabled = true;
        document.querySelector('.decodificador__saida__caixa').value = '';
        document.querySelector('.decodificador__saida__caixa').style.display = 'none';
        mostrarMensagem();
    }
    else{
        document.querySelector('.botao__criptografar').disabled = false;
        document.querySelector('.botao__descriptografar').disabled = false;
    }
}

function esconderMensagem(){
    document.querySelector('.decodificador__saida__mensagem').style.display = 'none';
    document.querySelector('.botao__copiar').style.display = 'block';
}

function mostrarMensagem(){
    document.querySelector('.decodificador__saida__mensagem').style.display = 'flex';
    document.querySelector('.botao__copiar').style.display = 'none';
}

function criptografar(){
    esconderMensagem();
    document.querySelector('.decodificador__saida__caixa').style.display = 'flex';
    let texto = document.querySelector('.decodificador__entrada__caixa').value;
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^\w\s]/gi, '');

    for(let i = 0; i < listaEntrada.length; i++){
        if(texto.includes(listaEntrada[i])){
            texto = texto.replaceAll(listaEntrada[i], listaChave[i]);
        }
    }

    document.querySelector('.decodificador__saida__caixa').value = texto;
}

function descriptografar(){
    esconderMensagem();
    document.querySelector('.decodificador__saida__caixa').style.display = 'flex';
    let texto = document.querySelector('.decodificador__entrada__caixa').value;
    texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^\w\s]/gi, '');


    for(let i = 0; i < listaEntrada.length; i++){
        if(texto.includes(listaChave[i])){
            texto = texto.replaceAll(listaChave[i], listaEntrada[i]);
        }
    }

    document.querySelector('.decodificador__saida__caixa').value = texto;

}

function copiarTexto(){
    var copiaTexto = document.querySelector(".decodificador__saida__caixa");

    copiaTexto.select();
    copiaTexto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiaTexto.value);
}