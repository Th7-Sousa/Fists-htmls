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

// QUESTÃO 1

var count = 0;
var listaNomes = [];
var notasAlunos = [];

while (count < 3) {
  ++count;
  inputNome = [prompt("nome: ")];
  listaNomes.push(inputNome);
  inputNota = [prompt("nota: ")];
  notasAlunos.push(inputNota);
}

function MediaFunc(total, num) {
  return (total + num) / 3;
}

console.log(`Média: ${notasAlunos.reduce(MediaFunc)}`);
