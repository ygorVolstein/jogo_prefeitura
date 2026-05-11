// ===== STATE =====
let currentIndex = 0;
let score = 0;
let answered = false;
let player = { name: '', school: '', age: '' };

// ===== DOM REFS =====
const screenStart   = document.getElementById('screen-start');
const screenColeta  = document.getElementById('screen-coleta');
const screenQuiz    = document.getElementById('screen-quiz');
const screenResult  = document.getElementById('screen-result');

// Coleta
const inputName    = document.getElementById('player-name');
const inputSchool  = document.getElementById('player-school');
const inputAge     = document.getElementById('player-age');
const coletaError  = document.getElementById('coleta-error');

// Quiz
const progressFill  = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const scoreLabel    = document.getElementById('score-label');
const questionText  = document.getElementById('question-text');
const optionA       = document.getElementById('option-a');
const optionB       = document.getElementById('option-b');
const imgA          = document.getElementById('img-a');
const imgB          = document.getElementById('img-b');
const labelA        = document.getElementById('label-a');
const labelB        = document.getElementById('label-b');
const feedbackEl    = document.getElementById('feedback');
const feedbackIcon  = document.getElementById('feedback-icon');
const feedbackText  = document.getElementById('feedback-text');
const btnNext       = document.getElementById('btn-next');

// Resultado
const resultTitle    = document.getElementById('result-title');
const resultGreeting = document.getElementById('result-greeting');
const resultScore    = document.getElementById('result-score');
const resultSubtitle = document.getElementById('result-subtitle');
const starsContainer = document.getElementById('stars-container');

// ===== NAVEGAÇÃO =====
function showScreen(screen) {
  [screenStart, screenColeta, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo(0, 0);
}

function goToHome() {
  showScreen(screenStart);
}

function goToColeta() {
  inputName.value = '';
  inputSchool.value = '';
  inputAge.value = '';
  coletaError.classList.add('d-none');
  showScreen(screenColeta);
}

// ===== COLETA + INÍCIO DO QUIZ =====
function startGame() {
  const name   = inputName.value.trim();
  const school = inputSchool.value.trim();
  const age    = inputAge.value.trim();

  if (!name || !school || !age) {
    coletaError.classList.remove('d-none');
    return;
  }

  player = { name, school, age };
  coletaError.classList.add('d-none');

  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  loadQuestion();
}

function restartGame() {
  // Mantém dados do jogador, só zera placar
  currentIndex = 0;
  score = 0;
  showScreen(screenQuiz);
  loadQuestion();
}

// ===== LÓGICA DO QUIZ =====
function loadQuestion() {
  answered = false;
  feedbackEl.className = 'alert d-none';
  btnNext.classList.remove('visible');

  const q = questions[currentIndex];
  const total = questions.length;
  const progress = (currentIndex / total) * 100;

  progressFill.style.width = progress + '%';
  progressLabel.textContent = `Pergunta ${currentIndex + 1} de ${total}`;
  scoreLabel.textContent = `Acertos: ${score}`;
  questionText.textContent = q.question;

  // Reset estados das opções
  [optionA, optionB].forEach(btn => {
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
  });

  setOptionImage(imgA, q.options[0].image);
  setOptionImage(imgB, q.options[1].image);

  labelA.textContent = q.options[0].label;
  labelB.textContent = q.options[1].label;
}

function setOptionImage(imgEl, src) {
  imgEl.style.display = '';
  imgEl.src = src;
  imgEl.onerror = function () {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.textContent = '🖼';
    this.parentNode.replaceChild(placeholder, this);
  };
}

function selectOption(chosenId) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const isCorrect = chosenId === q.correct;

  if (isCorrect) {
    score++;
    scoreLabel.textContent = `Acertos: ${score}`;
  }

  const btnChosen  = chosenId === 'A' ? optionA : optionB;
  const btnCorrect = q.correct === 'A' ? optionA : optionB;

  btnChosen.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btnCorrect.classList.add('correct');

  optionA.disabled = true;
  optionB.disabled = true;

  if (isCorrect) {
    feedbackIcon.textContent = '✅';
    feedbackText.textContent = 'Muito bem! Resposta correta!';
    feedbackEl.className = 'alert alert-success d-flex align-items-center gap-2 py-2 mb-3';
  } else {
    feedbackIcon.textContent = '💡';
    feedbackText.textContent = 'Quase! A resposta certa está em verde.';
    feedbackEl.className = 'alert alert-warning d-flex align-items-center gap-2 py-2 mb-3';
  }

  btnNext.classList.add('visible');
  btnNext.textContent = currentIndex + 1 < questions.length ? 'Próxima →' : 'Ver resultado';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// ===== RESULTADO COM ESTRELAS =====
function calculateStars(correct, total) {
  // Mapeia % de acerto em 0 a 5 estrelas
  const pct = correct / total;
  if (pct >= 0.9)  return 5;
  if (pct >= 0.75) return 4;
  if (pct >= 0.5)  return 3;
  if (pct >= 0.3)  return 2;
  if (pct > 0)     return 1;
  return 0;
}

function showResult() {
  const total = questions.length;
  const stars = calculateStars(score, total);

  // Saudação personalizada
  resultGreeting.textContent = player.name
    ? `Parabéns, ${player.name}!`
    : 'Parabéns!';

  // Título e mensagem dinâmicos
  if (stars >= 4) {
    resultTitle.textContent = 'Você conseguiu!!';
    resultSubtitle.textContent = 'Você manda bem na história de Brusque!';
  } else if (stars >= 2) {
    resultTitle.textContent = 'Muito bem!';
    resultSubtitle.textContent = 'Continue aprendendo sobre a nossa cidade!';
  } else {
    resultTitle.textContent = 'Boa tentativa!';
    resultSubtitle.textContent = 'Cada tentativa é uma conquista! Vamos aprender juntos!';
  }

  resultScore.textContent = `${score} de ${total} acertos`;

  // Anima estrelas
  const starEls = starsContainer.querySelectorAll('.star');
  starEls.forEach(s => s.classList.remove('filled'));
  starEls.forEach((s, idx) => {
    if (idx < stars) {
      setTimeout(() => s.classList.add('filled'), 200 + idx * 150);
    }
  });

  showScreen(screenResult);
}
