// Função para rolar suavemente até uma seção
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Função para mostrar detalhes dos jogos no modal
function showGameDetails(gameType) {
  const modal = document.getElementById('gameModal');
  const modalContent = document.getElementById('modalContent');
  
  let content = '';
  
  switch(gameType) {
    case 'associacao':
      content = `
        <h2><i class="fas fa-link"></i> Jogo de Associação</h2>
        <p>Associe as imagens com os nomes corretos dos locais de Altaneira.</p>
        <ul>
          <li>Clique na opção correta para cada imagem</li>
          <li>Desenvolve reconhecimento visual e memória</li>
          <li>Conheça os pontos turísticos da região</li>
        </ul>
        <a href="games/association-game.html" class="btn btn-primary">Jogar Agora</a>
      `;
      break;
    case 'memoria':
      content = `
        <h2><i class="fas fa-brain"></i> Jogo da Memória</h2>
        <p>Encontre os pares de cartas iguais para desenvolver sua memória.</p>
        <ul>
          <li>Clique nas cartas para revelá-las</li>
          <li>Encontre os pares iguais</li>
          <li>Desenvolve concentração e memória visual</li>
        </ul>
        <a href="games/memory-game.html" class="btn btn-primary">Jogar Agora</a>
      `;
      break;
    case 'montagem':
      content = `
        <h2><i class="fas fa-puzzle-piece"></i> Montagem de Palavras</h2>
        <p>Arraste as letras para montar a palavra correta baseada na dica.</p>
        <ul>
          <li>Leia a dica com atenção</li>
          <li>Arraste as letras para os espaços corretos</li>
          <li>Desenvolve vocabulário e raciocínio</li>
        </ul>
        <a href="games/word-assembly-game.html" class="btn btn-primary">Jogar Agora</a>
      `;
      break;
    case 'sequencia':
      content = `
        <h2><i class="fas fa-list-ol"></i> Sequência de Animais</h2>
        <p>Memorize a sequência visual de animais e depois escolha a correta sem dicas para desenvolver a memória e lógica.</p>
        <ul>
          <li>Observe a sequência de animais por 3 segundos</li>
          <li>Memorize a ordem correta apenas visualmente</li>
          <li>Escolha a sequência correta entre as opções</li>
          <li>Sem dicas textuais - apenas memória visual</li>
          <li>Diferentes categorias: domésticos, selvagens, aquáticos, etc.</li>
          <li>Desenvolve memória visual pura e raciocínio sequencial</li>
          <li>Passa automaticamente para próxima questão ao acertar</li>
        </ul>
        <a href="games/animal-sequence-game.html" class="btn btn-primary">Jogar Agora</a>
      `;
      break;
  }
  
  modalContent.innerHTML = content;
  modal.style.display = 'block';
}

// Fechar modal quando clicar no X
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('gameModal');
  const closeBtn = document.querySelector('.close');
  
  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
  }
  
  // Fechar modal quando clicar fora dele
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
  // Botão 'Explorar Jogos'
  const btnJogos = document.querySelector('.btn.btn-secondary[onclick*="jogos"]');
  if (btnJogos) {
    btnJogos.onclick = function() {
      window.location.hash = '#jogos';
      const section = document.getElementById('jogos');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    };
  }
  // Botão 'Saiba Mais'
  const btnSaibaMais = document.querySelector('.btn.btn-primary[onclick*="sobre"]');
  if (btnSaibaMais) {
    btnSaibaMais.onclick = function() {
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    };
  }
});
