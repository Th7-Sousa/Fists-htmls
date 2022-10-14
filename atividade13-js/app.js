// QUESTÃO 1
var count = 0;
var listaNomes = [];
var notasAlunos = [];
let somaNotas = 0;
while (count < 5) {
  ++count;
  inputNome = [prompt(`QUESTÃO 1 \n -------------- \n nome: `)];
  listaNomes.push(inputNome);
  inputNota = [prompt(`QUESTÃO 1 \n -------------- \n nota: `)];
  notasAlunos.push(inputNota);
}
for (let i = 0; i < notasAlunos.length; i++) {
  somaNotas += notasAlunos[i];
}
alert(
  `QUESTÃO 1 \n -------------- \n Nomes: ${listaNomes} \n Notas: ${notasAlunos} \n Média: ${
    somaNotas / 5
  }`
);

// QUESTÃO 2
var M = [];
var A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var X = 3;
for (i in A) {
  X = X * A[i];
  M.push(X);
  X = 3;
}
alert(
  `QUESTÃO 2 \n -------------- \n X = ${X} \n Array A: [${A}] \n Array M: [${M}]`
);

// QUESTÃO 3
var tempMedia = [27, 29, 28, 34, 32, 31, 32];
var menorTemp = Math.min(...tempMedia);
var maiorTemp = Math.max(...tempMedia);
alert(
  `QUESTÃO 3 \n ----------------- \n
  Médias de temperaturas: [${tempMedia}]
  \n Menor média: ${menorTemp}\n Maior média: ${maiorTemp}`
);

// QUESTÃO 6

var valorSaque;
var saquesValidos = 0;
var saquesInvalidos = 0;

while (true) {
  valorSaque = Number(prompt(`QUESTÃO 6 \n --------------- \n sacar: `));
  if (valorSaque === 0) {
    break;
  } else if (valorSaque === 10) {
    alert("Saque Válido!");
    ++saquesValidos;
    continue;
  } else {
    ++saquesInvalidos;
    alert("Saque Inválido!");
    continue;
  }
}
alert(
  `QUESTÃO 6 \n --------------- \n Saques inválidos: ${saquesInvalidos} \n Saques válidos ${saquesValidos}`
);
