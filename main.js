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