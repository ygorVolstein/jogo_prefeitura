// ===== DOM REFS - RESULTADO =====
const resultadoTitulo = document.getElementById('resultado-titulo');
const resultadoSaudacao = document.getElementById('resultado-saudacao');
const resultadoPontuacao = document.getElementById('resultado-pontuacao');
const resultadoSubtitulo = document.getElementById('resultado-subtitulo');
const containerEstrelas = document.getElementById('container-estrelas');

function calcularEstrelas(acertos, total) {
  const pct = acertos / total;
  if (pct >= 0.9)  return 5;
  if (pct >= 0.75) return 4;
  if (pct >= 0.5)  return 3;
  if (pct >= 0.3)  return 2;
  if (pct > 0)     return 1;
  return 0;
}

function mostrarResultado() {
  const total = perguntasEmbaralhadas.length;
  const estrelas = calcularEstrelas(pontuacao, total);

  resultadoSaudacao.textContent = jogador.nome ? `Parabéns, ${jogador.nome}!` : 'Parabéns!';

  if (estrelas >= 4) {
    resultadoTitulo.textContent    = 'Você conseguiu!!';
    resultadoSubtitulo.textContent = 'Você manda bem na história de Brusque!';
  } else if (estrelas >= 2) {
    resultadoTitulo.textContent    = 'Muito bem!';
    resultadoSubtitulo.textContent = 'Continue aprendendo sobre a nossa cidade!';
  } else {
    resultadoTitulo.textContent    = 'Boa tentativa!';
    resultadoSubtitulo.textContent = 'Cada tentativa é uma conquista! Vamos aprender juntos!';
  }

  resultadoPontuacao.textContent = `${pontuacao} de ${total} acertos`;

  const elsEstrelas = containerEstrelas.querySelectorAll('.estrela');
  elsEstrelas.forEach(e => e.classList.remove('preenchida'));
  elsEstrelas.forEach((e, idx) => {
    if (idx < estrelas) setTimeout(() => e.classList.add('preenchida'), 200 + idx * 150);
  });

  mostrarTela(telaResultado);
}

function reiniciarJogo() {
  indiceAtual = 0;
  pontuacao = 0;
  mostrarTela(telaQuiz);
  carregarPergunta();
}
