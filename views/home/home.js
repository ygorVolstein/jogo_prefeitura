function irParaInicio() {
  mostrarTela(telaInicio);
}

function iniciarJogoDireto() {
  jogador = { nome: '', escola: '', idade: '' };
  indiceAtual = 0;
  pontuacao = 0;
  mostrarTela(telaQuiz);
  carregarPergunta();
}
