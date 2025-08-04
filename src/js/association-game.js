// Jogo de Associação - Nature Atypical
const associationData = [
  {
    img: 'img/1.png',
    correct: 'Açude do Valério (Pajeú) – Serra do Valério',
    wrong: [
      'Pedra Grande',
      'Forno do continuo'
    ]
  },
  {
    img: 'img/2.png',
    correct: 'Riacho do Felipe - Taboquinha',
    wrong: [
      'Sitio Poças',
      'LAGOA SECA – Córrego'
    ]
  },
  {
    img: 'img/3.png',
    correct: 'Árvore típica da nossa região – Valério de Baixo',
    wrong: [
      'ESTEVÃO',
      'Nascente – São Romão'
    ]
  },
  {
    img: 'img/4.png',
    correct: 'LAGOA SECA – Córrego',
    wrong: [
      'Açude do Valério (Pajeú) – Serra do Valério',
      'Riacho do Felipe - Taboquinha'
    ]
  },
  {
    img: 'img/5.png',
    correct: 'ESTEVÃO',
    wrong: [
      'Forno do continuo',
      'Árvore típica da nossa região – Valério de Baixo'
    ]
  },
  {
    img: 'img/6.png',
    correct: 'Pedra Grande',
    wrong: [
      'Sitio Poças',
      'Nascente – São Romão'
    ]
  },
  {
    img: 'img/7.png',
    correct: 'Sitio Poças',
    wrong: [
      'ESTEVÃO',
      'LAGOA SECA – Córrego'
    ]
  },
  {
    img: 'img/8.jpg',
    correct: 'Forno do continuo',
    wrong: [
      'Pedra Grande',
      'Açude do Valério (Pajeú) – Serra do Valério'
    ]
  },
  {
    img: 'img/9.png',
    correct: 'Nascente – São Romão',
    wrong: [
      'Riacho do Felipe - Taboquinha',
      'Sitio Poças'
    ]
  }
];

let currentIndex = 0;
let order = [];
let correctCount = 0;
let errorCount = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startAssociationGame() {
  order = shuffle([...Array(associationData.length).keys()]);
  currentIndex = 0;
  correctCount = 0;
  errorCount = 0;
  showAssociationQuestion();
}

function showAssociationQuestion() {
  const imgEl = document.getElementById('associationImg');
  const optionsEl = document.getElementById('associationOptions');
  const feedbackEl = document.getElementById('associationFeedback');
  const nextBtn = document.getElementById('associationNextBtn');

  feedbackEl.textContent = '';
  nextBtn.style.display = 'none';

  if (currentIndex >= order.length) {
    imgEl.style.display = 'none';
    optionsEl.innerHTML = '';
    feedbackEl.innerHTML = `Parabéns! Você completou o jogo!<br><br>Acertos: <b>${correctCount}</b><br>Erros: <b>${errorCount}</b>`;
    return;
  }

  const data = associationData[order[currentIndex]];
  imgEl.src = '../' + data.img;
  imgEl.alt = 'Imagem para associar';
  imgEl.style.display = 'block';

  // Montar e embaralhar opções
  const options = shuffle([
    { text: data.correct, correct: true },
    { text: data.wrong[0], correct: false },
    { text: data.wrong[1], correct: false }
  ]);

  optionsEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'association-option';
    btn.textContent = opt.text;
    btn.onclick = () => handleAssociationAnswer(opt.correct, btn);
    optionsEl.appendChild(btn);
  });
}

function handleAssociationAnswer(isCorrect, btn) {
  const feedbackEl = document.getElementById('associationFeedback');
  const nextBtn = document.getElementById('associationNextBtn');
  const optionsEl = document.getElementById('associationOptions');

  if (isCorrect) {
    // Só conta acerto se não tiver errado antes
    if (!btn.parentNode.hasAttribute('data-errou')) {
      correctCount++;
    }
    feedbackEl.textContent = 'Correto! Muito bem!';
    feedbackEl.style.color = '#388e3c';
    btn.style.background = '#388e3c';
    btn.style.color = '#fff';
    // Desabilitar todos os botões
    Array.from(optionsEl.children).forEach(b => b.disabled = true);
    // Passar automaticamente após 3 segundos
    setTimeout(() => {
      currentIndex++;
      showAssociationQuestion();
    }, 3000);
    nextBtn.style.display = 'none';
  } else {
    errorCount++;
    feedbackEl.textContent = 'Ops! Tente novamente.';
    feedbackEl.style.color = '#c62828';
    btn.style.background = '#c62828';
    btn.style.color = '#fff';
    btn.disabled = true;
    // Marca que já errou nesta rodada
    btn.parentNode.setAttribute('data-errou', '1');
    nextBtn.style.display = 'inline-block';
    nextBtn.onclick = () => {
      currentIndex++;
      showAssociationQuestion();
    };
  }
}

document.addEventListener('DOMContentLoaded', startAssociationGame); 