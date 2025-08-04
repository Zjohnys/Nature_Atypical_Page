// Jogo de Sequência de Animais - Nature Atypical
const animalSequenceData = [
  {
    title: 'Sequência de Animais Domésticos',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐶', '🐱', '🐰'],
    wrongSequences: [
      ['🐱', '🐶', '🐰'],
      ['🐰', '🐱', '🐶'],
      ['🐶', '🐰', '🐱']
    ],
    description: 'Sequência: Cachorro, Gato, Coelho',
    showTime: 3000 // 3 segundos para mostrar a sequência
  },
  {
    title: 'Sequência de Animais da Fazenda',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐷', '🐮', '🐑'],
    wrongSequences: [
      ['🐮', '🐷', '🐑'],
      ['🐑', '🐮', '🐷'],
      ['🐷', '🐑', '🐮']
    ],
    description: 'Sequência: Porco, Vaca, Ovelha',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Selvagens',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🦁', '🐯', '🐻'],
    wrongSequences: [
      ['🐯', '🦁', '🐻'],
      ['🐻', '🐯', '🦁'],
      ['🦁', '🐻', '🐯']
    ],
    description: 'Sequência: Leão, Tigre, Urso',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Aquáticos',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐟', '🐠', '🐙'],
    wrongSequences: [
      ['🐠', '🐟', '🐙'],
      ['🐙', '🐠', '🐟'],
      ['🐟', '🐙', '🐠']
    ],
    description: 'Sequência: Peixe, Peixe Dourado, Polvo',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Voadores',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🦅', '🦉', '🦇'],
    wrongSequences: [
      ['🦉', '🦅', '🦇'],
      ['🦇', '🦉', '🦅'],
      ['🦅', '🦇', '🦉']
    ],
    description: 'Sequência: Águia, Coruja, Morcego',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais da Selva',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐘', '🦒', '🦛'],
    wrongSequences: [
      ['🦒', '🐘', '🦛'],
      ['🦛', '🦒', '🐘'],
      ['🐘', '🦛', '🦒']
    ],
    description: 'Sequência: Elefante, Girafa, Hipopótamo',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Pequenos',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐜', '🐝', '🦋'],
    wrongSequences: [
      ['🐝', '🐜', '🦋'],
      ['🦋', '🐝', '🐜'],
      ['🐜', '🦋', '🐝']
    ],
    description: 'Sequência: Formiga, Abelha, Borboleta',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Rastejantes',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐍', '🦎', '🐢'],
    wrongSequences: [
      ['🦎', '🐍', '🐢'],
      ['🐢', '🦎', '🐍'],
      ['🐍', '🐢', '🦎']
    ],
    description: 'Sequência: Cobra, Lagarto, Tartaruga',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais Marinhos',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐋', '🐬', '🦑'],
    wrongSequences: [
      ['🐬', '🐋', '🦑'],
      ['🦑', '🐬', '🐋'],
      ['🐋', '🦑', '🐬']
    ],
    description: 'Sequência: Baleia, Golfinho, Lula',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais da Montanha',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐐', '🦌', '🐻‍❄️'],
    wrongSequences: [
      ['🦌', '🐐', '🐻‍❄️'],
      ['🐻‍❄️', '🦌', '🐐'],
      ['🐐', '🐻‍❄️', '🦌']
    ],
    description: 'Sequência: Cabra, Veado, Urso Polar',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais do Deserto',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🐪', '🦎', '🦂'],
    wrongSequences: [
      ['🦎', '🐪', '🦂'],
      ['🦂', '🦎', '🐪'],
      ['🐪', '🦂', '🦎']
    ],
    description: 'Sequência: Camelo, Lagarto, Escorpião',
    showTime: 3000
  },
  {
    title: 'Sequência de Animais da Floresta',
    question: 'Lembre-se da sequência mostrada e escolha a correta:',
    correctSequence: ['🦊', '🐿️', '🦝'],
    wrongSequences: [
      ['🐿️', '🦊', '🦝'],
      ['🦝', '🐿️', '🦊'],
      ['🦊', '🦝', '🐿️']
    ],
    description: 'Sequência: Raposa, Esquilo, Guaxinim',
    showTime: 3000
  }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let questionOrder = [];
let timerInterval = null;
let memorizationTime = 30; // 30 segundos para memorização (mais intuitivo)

// Função para embaralhar array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para iniciar o temporizador
function startTimer() {
  let timeLeft = memorizationTime;
  const timerDisplay = document.getElementById('timerDisplay');
  const timerContainer = document.getElementById('timerContainer');
  
  // Mostrar o temporizador
  timerContainer.style.display = 'flex';
  
  // Atualizar display inicial
  timerDisplay.textContent = timeLeft;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    
    // Atualizar display
    timerDisplay.textContent = timeLeft;
    
    // Adicionar efeito de aviso quando restam 5 segundos ou menos
    if (timeLeft <= 5) {
      timerContainer.classList.add('timer-warning');
    }
    
    // Quando o tempo acabar
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      
      // Esconder temporizador
      timerContainer.style.display = 'none';
      timerContainer.classList.remove('timer-warning');
      
      // Mostrar as opções da questão
      const questionData = animalSequenceData[questionOrder[currentQuestionIndex]];
      showQuestionOptions(questionData);
    }
  }, 1000);
}

// Função para parar o temporizador
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  // Esconder temporizador
  const timerContainer = document.getElementById('timerContainer');
  timerContainer.style.display = 'none';
  timerContainer.classList.remove('timer-warning');
}

// Função para gerar opções de sequências
function generateSequenceOptions(correctSequence, wrongSequences) {
  return shuffle([correctSequence, ...wrongSequences]);
}

// Função para iniciar o jogo
function startAnimalSequenceGame() {
  // Parar temporizador se estiver rodando
  stopTimer();
  
  questionOrder = shuffle([...Array(animalSequenceData.length).keys()]);
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  updateScore();
  showQuestion();
}

// Função para mostrar questão
function showQuestion() {
  if (currentQuestionIndex >= questionOrder.length) {
    showGameComplete();
    return;
  }

  const questionData = animalSequenceData[questionOrder[currentQuestionIndex]];
  
  // Primeiro, mostrar a sequência para memorização
  showSequenceForMemorization(questionData);
}

// Função para mostrar sequência para memorização
function showSequenceForMemorization(questionData) {
  // Atualizar elementos da interface
  document.getElementById('questionTitle').textContent = questionData.title;
  document.getElementById('questionText').textContent = 'Observe atentamente a sequência abaixo:';
  document.getElementById('questionDescription').textContent = '';
  
  // Mostrar a sequência correta
  const optionsContainer = document.getElementById('sequenceOptions');
  optionsContainer.innerHTML = '';
  
  const sequenceDisplay = document.createElement('div');
  sequenceDisplay.className = 'sequence-display memorization';
  
  questionData.correctSequence.forEach(emoji => {
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'sequence-emoji';
    emojiSpan.textContent = emoji;
    sequenceDisplay.appendChild(emojiSpan);
  });
  
  optionsContainer.appendChild(sequenceDisplay);
  
  // Limpar feedback
  const feedbackEl = document.getElementById('sequenceFeedback');
  feedbackEl.textContent = 'Você tem 30 segundos para memorizar a sequência!';
  feedbackEl.className = 'sequence-feedback memorization';
  
  // Esconder botão próximo
  document.getElementById('sequenceNextBtn').style.display = 'none';
  
  // Iniciar temporizador de 60 segundos
  startTimer();
}

// Função para mostrar opções da questão
function showQuestionOptions(questionData) {
  // Atualizar pergunta
  document.getElementById('questionText').textContent = 'Agora escolha a sequência correta:';
  document.getElementById('questionDescription').textContent = '';
  
  // Gerar opções de sequências
  const allSequences = generateSequenceOptions(questionData.correctSequence, questionData.wrongSequences);
  
  // Criar botões de opções
  const optionsContainer = document.getElementById('sequenceOptions');
  optionsContainer.innerHTML = '';
  
  allSequences.forEach((sequence, index) => {
    const button = document.createElement('button');
    button.className = 'sequence-option';
    
    // Criar visualização da sequência
    const sequenceDisplay = document.createElement('div');
    sequenceDisplay.className = 'sequence-display';
    
    sequence.forEach(emoji => {
      const emojiSpan = document.createElement('span');
      emojiSpan.className = 'sequence-emoji';
      emojiSpan.textContent = emoji;
      sequenceDisplay.appendChild(emojiSpan);
    });
    
    button.appendChild(sequenceDisplay);
    button.onclick = () => handleAnswer(JSON.stringify(sequence) === JSON.stringify(questionData.correctSequence), button);
    optionsContainer.appendChild(button);
  });
  
  // Limpar feedback
  const feedbackEl = document.getElementById('sequenceFeedback');
  feedbackEl.textContent = '';
  feedbackEl.className = 'sequence-feedback';
  
  // Esconder botão próximo
  document.getElementById('sequenceNextBtn').style.display = 'none';
  
  // Atualizar progresso
  updateProgress();
}

// Função para lidar com resposta
function handleAnswer(isCorrect, button) {
  // Parar o temporizador se estiver rodando
  stopTimer();
  
  const feedbackEl = document.getElementById('sequenceFeedback');
  const nextBtn = document.getElementById('sequenceNextBtn');
  const optionsContainer = document.getElementById('sequenceOptions');
  
  // Desabilitar todos os botões
  Array.from(optionsContainer.children).forEach(btn => {
    btn.disabled = true;
  });
  
  if (isCorrect) {
    correctAnswers++;
    feedbackEl.textContent = '🎉 Correto! Sequência perfeita!';
    feedbackEl.className = 'sequence-feedback correct';
    button.classList.add('correct');
    
    // Passar automaticamente para próxima questão após 3 segundos
    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion();
    }, 3000);
  } else {
    wrongAnswers++;
    feedbackEl.textContent = '❌ Ops! Tente novamente.';
    feedbackEl.className = 'sequence-feedback incorrect';
    button.classList.add('incorrect');
    
    // Mostrar a sequência correta
    const correctButton = Array.from(optionsContainer.children).find(btn => {
      const sequenceDisplay = btn.querySelector('.sequence-display');
      const sequence = Array.from(sequenceDisplay.children).map(span => span.textContent);
      return JSON.stringify(sequence) === JSON.stringify(animalSequenceData[questionOrder[currentQuestionIndex]].correctSequence);
    });
    if (correctButton) {
      correctButton.classList.add('correct');
    }
    
    // Mostrar botão próximo para continuar
    setTimeout(() => {
      nextBtn.style.display = 'inline-block';
      nextBtn.onclick = () => {
        currentQuestionIndex++;
        showQuestion();
      };
    }, 2000);
  }
  
  updateScore();
}

// Função para atualizar pontuação
function updateScore() {
  document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
  document.getElementById('totalQuestions').textContent = animalSequenceData.length;
  document.getElementById('correctAnswers').textContent = correctAnswers;
  document.getElementById('wrongAnswers').textContent = wrongAnswers;
}

// Função para atualizar barra de progresso
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / animalSequenceData.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

// Função para mostrar conclusão do jogo
function showGameComplete() {
  const container = document.querySelector('.sequence-container');
  const score = Math.round((correctAnswers / animalSequenceData.length) * 100);
  
  let message = '';
  let emoji = '';
  
  if (score >= 90) {
    message = 'Excelente! Você é um mestre das sequências!';
    emoji = '🏆';
  } else if (score >= 70) {
    message = 'Muito bom! Você está no caminho certo!';
    emoji = '🌟';
  } else if (score >= 50) {
    message = 'Bom trabalho! Continue praticando!';
    emoji = '👍';
  } else {
    message = 'Não desista! Pratique mais um pouco!';
    emoji = '💪';
  }
  
  container.innerHTML = `
    <h1 class="sequence-title">${emoji} Jogo Concluído! ${emoji}</h1>
    <div class="sequence-score">
      <h2>Resultado Final</h2>
      <p><strong>Acertos:</strong> ${correctAnswers} de ${animalSequenceData.length}</p>
      <p><strong>Porcentagem:</strong> ${score}%</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    </div>
    <button onclick="startAnimalSequenceGame()" class="sequence-next-btn">Jogar Novamente</button>
    <button onclick="window.location.href='../index.html'" class="sequence-back-btn">Voltar ao Início</button>
  `;
}

// Iniciar jogo quando a página carregar
document.addEventListener('DOMContentLoaded', startAnimalSequenceGame); 