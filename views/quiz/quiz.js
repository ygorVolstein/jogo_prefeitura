// ===== DOM REFS - QUIZ =====
const progressoPreenchimento = document.getElementById('progresso-preenchimento');
const progressoRotulo = document.getElementById('progresso-rotulo');
const perguntaTexto = document.getElementById('pergunta-texto');
const opcaoA = document.getElementById('opcao-a');
const opcaoB = document.getElementById('opcao-b');
const imagemA = document.getElementById('imagem-a');
const imagemB = document.getElementById('imagem-b');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const btnProxima = document.getElementById('btn-proxima');
const quizConteudo = document.querySelector('.quiz-conteudo');

function carregarPergunta() {
  respostaSelecionada = null;
  btnProxima.classList.remove('visivel');

  const p = perguntasEmbaralhadas[indiceAtual];
  const total = perguntasEmbaralhadas.length;

  progressoPreenchimento.style.width = `${(indiceAtual / total) * 100}%`;
  progressoRotulo.textContent = `Pergunta ${indiceAtual + 1} de ${total}`;
  perguntaTexto.textContent = p.pergunta;

  [opcaoA, opcaoB].forEach(btn => {
    btn.classList.remove('selecionado');
    btn.disabled = false;
  });

  definirImagemOpcao(imagemA, p.opcoes[0].imagem);
  definirImagemOpcao(imagemB, p.opcoes[1].imagem);
  labelA.textContent = p.opcoes[0].label;
  labelB.textContent = p.opcoes[1].label;
}

function definirImagemOpcao(imagemEl, src) {
  imagemEl.style.display = '';
  imagemEl.src = src;
  imagemEl.onerror = function () {
    const placeholder = document.createElement('div');
    placeholder.className = 'imagem-placeholder';
    placeholder.textContent = '🖼';
    this.parentNode.replaceChild(placeholder, this);
  };
}

function selecionarOpcao(idEscolhido) {
  [opcaoA, opcaoB].forEach(btn => btn.classList.remove('selecionado'));

  const btnEscolhido = idEscolhido === 'A' ? opcaoA : opcaoB;
  btnEscolhido.classList.add('selecionado');
  respostaSelecionada = idEscolhido;

  btnProxima.classList.add('visivel');
  const ehUltima = indiceAtual + 1 >= perguntasEmbaralhadas.length;
  btnProxima.innerHTML = ehUltima
    ? 'Ver resultado <i class="bi bi-flag-fill ms-1"></i>'
    : 'Próxima <i class="bi bi-arrow-right ms-1"></i>';
}

function proximaPergunta() {
  if (!respostaSelecionada) return;

  const p = perguntasEmbaralhadas[indiceAtual];
  if (respostaSelecionada === p.correta) pontuacao++;

  respostaSelecionada = null;
  indiceAtual++;

  if (indiceAtual >= perguntasEmbaralhadas.length) {
    mostrarResultado();
    return;
  }

  // Esconde o botão e desliza o conteúdo para a esquerda, troca a pergunta e desliza de volta da direita
  btnProxima.classList.remove('visivel');
  quizConteudo.classList.add('saindo');
  setTimeout(() => {
    carregarPergunta();
    quizConteudo.classList.remove('saindo');
    quizConteudo.classList.add('entrando');
    setTimeout(() => quizConteudo.classList.remove('entrando'), 300);
  }, 300);
}
