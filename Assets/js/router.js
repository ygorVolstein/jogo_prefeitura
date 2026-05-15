// ===== ESTADO GLOBAL =====
let indiceAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;
let jogador = { nome: '', escola: '', idade: '' };

// ===== REFS DAS TELAS =====
const telaInicio = document.getElementById('tela-inicio');
const telaColeta = document.getElementById('tela-coleta');
const telaQuiz = document.getElementById('tela-quiz');
const telaResultado = document.getElementById('tela-resultado');

// ===== REFS DA TELA DE COLETA =====
const inputNome = document.getElementById('jogador-nome');
const inputEscola = document.getElementById('jogador-escola');
const inputIdade = document.getElementById('jogador-idade');
const coletaErro = document.getElementById('coleta-erro');

// ===== NAVEGAÇÃO =====
function mostrarTela(tela) {
  [telaInicio, telaColeta, telaQuiz, telaResultado].forEach(t => t.classList.remove('ativa'));
  tela.classList.add('ativa');
  window.scrollTo(0, 0);
}
