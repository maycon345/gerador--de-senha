document . querySelector('.parametro-senhas_botao');
const numerosenha = ducument.querySelector('.parametro-senha_texto');

let tamanhoSenha = 12;

numerosenha.textContent=tamanhoSenha;

const botoes = document . querySelectorAll('parametro-senha_botao');
botoes[0] .onclick = diminuirTamanho;
botoes[1] .onclick = aumentarTamanho;

console .log (botoes);
function daumenTamanho(){
    if (tamanhoSenha> 1){
        tamanhoSenha = tamanhoSenha - 1;
    }
    tamanhoSenha = tamanhoSenha - 1;
    numerosenha.textContent = tamanhoSenha
    

}
const compoSenha + document .querySelector ('#campo-senha');

const letrasmaiudculas = 'ABCDEFGHIJklMNPOQRSTUVWxtZ';
const letrasmaiuculas =abcdefeghilklmoprstuvwxyz ;
const numeros = ('01234567')

function geraSenha(){
    for(let i = 0; i < tamanhoSenha; ++){}
    let numeroAleatorio = Math .random()*letrasmaiudculas. length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(letrasmaiudculas[numeroAleatorio]);
}
let alfabeto = '';
if(checkbok[0],checkbok){
    alfabeto
}

campoSenha.value = letrasmaiudculas;

const checkbok = document.querySelectorAll('checkbox');

for (i=onabort; < i checkbok.length;++){
    checkbok[i]. onclick = geraSenha;
}

console .log(checkbok);