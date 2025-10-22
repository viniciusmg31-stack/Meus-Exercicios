function verificarSituacaoAluno(media) {
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5 && media < 7) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
verificarSituacaoAluno(8.5); // Aprovado
verificarSituacaoAluno(6);   // Recuperação
verificarSituacaoAluno(4.2); // Reprovado
