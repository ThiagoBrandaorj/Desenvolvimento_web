const sair = () => {
    window.location.href = 'index.html';
}
const div_elenco_feminino = document.getElementById("lista_imagens_feminino");
const div_elenco_masculino = document.getElementById("lista_imagens_masculino");
jogadores.forEach(
    (ele) => {
        
        const img_jogador = document.createElement('img');
        img_jogador.src = ele.imagem;
        img_jogador.style.width = "auto";
        
      
        const nome_jogador = document.createElement('p');
        nome_jogador.innerHTML = ele.nome;
        nome_jogador.style.fontWeight = "bolder";

        const div_jogador = document.createElement('div');
        div_jogador.className = "jogador";
        div_jogador.appendChild(img_jogador);
        div_jogador.appendChild(nome_jogador);

        div_jogador.setAttribute("data-nome", ele.nome);
        div_jogador.setAttribute("data-posicao", ele.posicao);  
        div_jogador.setAttribute("data-imagem", ele.imagem);  
        div_jogador.setAttribute("data-descricao", ele.descricao);              
        div_jogador.setAttribute("data-nome_completo", ele.nome_completo);
        div_jogador.setAttribute("data-nascimento", ele.nascimento);        
        div_jogador.setAttribute("data-altura", ele.altura);

        if (ele.elenco == "feminino"){
            div_elenco_feminino.appendChild(div_jogador);
            div_elenco_masculino.appendChild(div_jogador);
        } else {
            div_elenco_masculino.appendChild(div_jogador);
        }
    }
)

const manipula_evento = (evento) => {
    
    const div_jogador = evento.currentTarget;

    localStorage.setItem('nome', div_jogador.dataset.nome);
    localStorage.setItem('posicao', div_jogador.dataset.posicao);
    localStorage.setItem('imagem', div_jogador.dataset.imagem);
    localStorage.setItem('descricao', div_jogador.dataset.descricao);
    localStorage.setItem('nome_completo', div_jogador.dataset.nome_completo);
    localStorage.setItem('nascimento', div_jogador.dataset.nascimento);
    localStorage.setItem('altura', div_jogador.dataset.altura);

    window.location.href = "./detalhes.html";

}

const storage_jogador = document.querySelectorAll(".jogador");
storage_jogador.forEach((div_jogador) => {
  div_jogador.addEventListener("click", manipula_evento);
});

document.getElementById('selecao').addEventListener('change', function () {
    const filtro = this.value;
   
    const imagensFeminino = document.getElementById('lista_imagens_feminino');
    const imagensMasculino = document.getElementById('lista_imagens_masculino');
   
    if (filtro === 'feminino') {
       imagensMasculino.style.display = 'none';
       imagensFeminino.style.display = 'grid';
       imagensFeminino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

    } else if (filtro === 'masculino') {
       imagensFeminino.style.display = 'none';
       imagensMasculino.style.display = 'grid';
       imagensMasculino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    } else {
       imagensFeminino.style.display = 'grid';
       imagensMasculino.style.display = 'grid';
       imagensFeminino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
       imagensMasculino.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    }
   });