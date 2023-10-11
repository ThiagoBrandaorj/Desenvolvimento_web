const yasmin = atletas[1];

window.onload = () => {


const espaco_imagem = document.querySelector('div#conteiner > img');
const espaco_nome = document.getElementById('nome');
const espaco_descricao = document.querySelector('div#conteiner > p');

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    espaco_imagem.src = atleta.imagem;
    espaco_descricao.innerHTML = atleta.descricao;
}
preenche(atletas[1])
}