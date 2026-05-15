function irParaColeta() {
  inputNome.value = '';
  inputEscola.value = '';
  inputIdade.value = '';
  coletaErro.classList.add('d-none');
  mostrarTela(telaColeta);
}

function iniciarJogo() {
  const nome = inputNome.value.trim();
  const escola = inputEscola.value.trim();
  const idade = inputIdade.value.trim();

  jogador = { nome, escola, idade };
  coletaErro.classList.add('d-none');

  indiceAtual = 0;
  pontuacao = 0;
  mostrarTela(telaQuiz);
  carregarPergunta();
}
