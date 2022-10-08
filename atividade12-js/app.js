// QUESTÃO 1

// let count = 0;
// let countIntervalo = 0;
// let countFora = 0;
// var lista = [];
// while (count < 10) {
//   let valor = alert(
//     Number(
//       lista.push(prompt(`QUESTÃO 1 \n --------------- \n insira um valor: `))
//     )
//   );
//   count++;
// }
// for (i in lista) {
//   if (lista[i] >= 10 && lista[i] <= 20) {
//     countIntervalo++;
//   } else {
//     countFora++;
//   }
// }
// console.log(`Valores no intervalo de 10 a 20: ${countIntervalo} \n
// Valores fora deste intervalo: ${countFora} `);

const AnosCopa = function (start = 1930, end = 2022, step = 4) {
  let count = 0;
  while (count != 1) {
    let ano = alert(Number(prompt(`Ano ou 0 para sair: `)));
    const lista = [];

    for (let i = start; i <= end; i += step) {
      lista.push(i);

      if (ano == lista[1942] || ano == lista[1946]) {
        console.log("não é copa");
      } else {
        console.log("ano de copa");
      }
    }
    if (ano == 0) {
      count = 1;
    }
  }
};
