// Palavras educativas e dicas
const words = [
  { word: 'ESCOLA', hint: 'Lugar onde estudamos.' },
  { word: 'LIVRO', hint: 'Objeto cheio de páginas para ler.' },
  { word: 'PROFESSOR', hint: 'Pessoa que ensina na sala de aula.' },
  { word: 'ALUNO', hint: 'Pessoa que aprende na escola.' },
  { word: 'LAPIS', hint: 'Usado para escrever e desenhar.' },
  { word: 'CADERNO', hint: 'Usado para anotar as lições.' },
  { word: 'QUADRO', hint: 'Onde o professor escreve para a turma.' },
  { word: 'LEITURA', hint: 'Ato de ler textos e livros.' },
  { word: 'APRENDER', hint: 'O que fazemos quando estudamos.' }
];

let currentIndex = 0;
let currentAnswer = [];
let wordOrder = [];
let usedLetters = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startWordAssemblyGame() {
  wordOrder = shuffle([...Array(words.length).keys()]);
  currentIndex = 0;
  showWordAssemblyQuestion();
}

function showWordAssemblyQuestion() {
  const hintEl = document.getElementById('wordHint');
  const slotsEl = document.getElementById('wordSlots');
  const lettersEl = document.getElementById('wordLetters');
  const feedbackEl = document.getElementById('wordFeedback');
  const nextBtn = document.getElementById('wordNextBtn');

  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';

  if (currentIndex >= words.length) {
    hintEl.textContent = '';
    slotsEl.innerHTML = '';
    lettersEl.innerHTML = '';
    feedbackEl.innerHTML = 'Parabéns! Você completou todas as palavras!';
    return;
  }

  const data = words[wordOrder[currentIndex]];
  hintEl.textContent = data.hint;

  // Montar slots vazios
  currentAnswer = Array(data.word.length).fill('');
  usedLetters = Array(data.word.length).fill(null);
  slotsEl.innerHTML = '';
  for (let i = 0; i < data.word.length; i++) {
    const slot = document.createElement('div');
    slot.className = 'word-slot';
    slot.textContent = '';
    slot.onclick = () => removeLetterFromSlot(i);
    slotsEl.appendChild(slot);
  }

  // Letras embaralhadas
  const shuffled = shuffle(data.word.split(''));
  lettersEl.innerHTML = '';
  shuffled.forEach((letter, idx) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.onclick = () => selectLetter(letter, idx, btn);
    lettersEl.appendChild(btn);
  });
}

function selectLetter(letter, idx, btn) {
  const slotsEl = document.getElementById('wordSlots');
  const feedbackEl = document.getElementById('wordFeedback');
  // Encontrar o próximo slot vazio
  const slotIdx = currentAnswer.findIndex(l => l === '');
  if (slotIdx === -1) return;
  currentAnswer[slotIdx] = letter;
  slotsEl.children[slotIdx].textContent = letter;
  usedLetters[slotIdx] = btn;
  btn.disabled = true;
  btn.style.opacity = 0.5;
  // Se completou a palavra
  if (!currentAnswer.includes('')) {
    checkWordAnswer();
  }
}

function removeLetterFromSlot(slotIdx) {
  if (currentAnswer[slotIdx] !== '') {
    const btn = usedLetters[slotIdx];
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = 1;
    }
    currentAnswer[slotIdx] = '';
    usedLetters[slotIdx] = null;
    const slotsEl = document.getElementById('wordSlots');
    slotsEl.children[slotIdx].textContent = '';
  }
}

function checkWordAnswer() {
  const feedbackEl = document.getElementById('wordFeedback');
  const nextBtn = document.getElementById('wordNextBtn');
  const data = words[wordOrder[currentIndex]];
  if (currentAnswer.join('') === data.word) {
    feedbackEl.textContent = 'Correto! Muito bem!';
    feedbackEl.style.color = '#388e3c';
    nextBtn.style.display = 'none';
    // Passar automaticamente após 3 segundos
    setTimeout(() => {
      currentIndex++;
      showWordAssemblyQuestion();
    }, 3000);
  } else {
    feedbackEl.textContent = 'Ops! Tente novamente.';
    feedbackEl.style.color = '#c62828';
    // Voltar todas as letras para a área de letras
    setTimeout(() => {
      showWordAssemblyQuestion();
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', startWordAssemblyGame); 