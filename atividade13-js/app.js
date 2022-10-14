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

// QUESTÃO 4
// let nome;
// let nota;
// listaNotas = [];
// listaNomes = [];
// let alunos7 = {};

// while (true) {
//   nome = prompt("nome (ou Fim para sair): ");
//   if (nome == "Fim") {
//     break;
//   }
//   listaNomes.push(nome);
//   nota = prompt("nota: ");
//   listaNotas.push(nota);
// }

// for (i in listaNotas) {
//   if (i >= 7) {
//     alunos7 = { nome: nome, nota: i };
//   } else {
//     console.log("Não há alunos em destaque na turma");
//   }
// }

// var maiorNota = listaNotas.reduce(function (a, b) {
//   return Math.max(a, b);
// }, -Infinity);

// console.log(`Maior nota da turma: ${maiorNota}`);
// console.log(`${listaNomes} / ${listaNotas}`);
// console.log(alunos7);
