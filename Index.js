let notas = [];
let nomes = [];
let mediaTurma;
let maiorNota = 0;
let menorNota = 10;
let quantidadeAprovados = 0;
let i;
let soma = 0;
for (i = 0; i < 10; i++) {
  notas[i] = parseFloat(prompt("Digite a nota"));
  nomes[i] = prompt("Digite o nome do Aluno");
  soma = soma + notas[i];
  if (maiorNota < notas[i]) {
    maiorNota = notas[i];
  }
  if (notas[i] < menorNota) {
    menorNota = notas[i];
  }
  if (notas[i] >= 6) {
    quantidadeAprovados = quantidadeAprovados + 1;
    console.log("Estudante acima da Média  " + nomes[i]);
  } else {
    console.log("EStudante abaixo da Média " + nomes[i]);
  }
}

mediaTurma = soma / 10;
console.log("Maior nota = " + maiorNota);
console.log("Menor nota = " + menorNota);
console.log("Quantidade de Aprovados = " + quantidadeAprovados);
console.log("Média da turma = " + mediaTurma);
