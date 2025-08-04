// Jogo da Memória - Nature Atypical
const images = [
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png',
  'img/7.png',
  'img/8.jpg',
  'img/9.png'
];

const cards = [...images, ...images]; // 9 pares = 18 cartas
let flippedCards = [];
let matchedCards = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createBoard() {
  const grid = document.getElementById('memoryGrid');
  grid.innerHTML = '';
  matchedCards = 0;
  flippedCards = [];
  const shuffled = shuffle([...cards]);
  shuffled.forEach((imgSrc, idx) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.img = imgSrc;
    card.tabIndex = 0;
    card.setAttribute('aria-label', 'Carta do jogo da memória');
    card.addEventListener('click', () => flipCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') flipCard(card);
    });
    const img = document.createElement('img');
    img.src = '../' + imgSrc;
    img.alt = 'Figura educativa';
    card.appendChild(img);
    grid.appendChild(card);
  });
}

function flipCard(card) {
  if (
    card.classList.contains('flipped') ||
    card.classList.contains('matched') ||
    flippedCards.length === 2
  ) {
    return;
  }
  card.classList.add('flipped');
  flippedCards.push(card);
  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 700);
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.img === card2.dataset.img) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards += 2;
    if (matchedCards === cards.length) {
      setTimeout(() => {
        alert('Parabéns! Você encontrou todos os pares!');
        createBoard();
      }, 500);
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
  }
  flippedCards = [];
}

document.addEventListener('DOMContentLoaded', createBoard); 