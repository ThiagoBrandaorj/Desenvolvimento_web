const preenche = (atleta) => {
    const conteiner = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;

    conteiner.appendChild(titulo);
    conteiner.appendChild(imagem);
    conteiner.appendChild(descricao);

    document.body.appendChild(conteiner);
}

for(let indice = 0; indice < atletas.length ; indice++){
    preenche(atletas[indice]);
    console.log(indice, 'loop for');
}

