// QUESTÃO 1
let count = 0;
let countIntervalo = 0;
let countFora = 0;
var lista = [];
while (count < 10) {
  let valor = alert(
    Number(
      lista.push(prompt(`QUESTÃO 1 \n --------------- \n insira um valor: `))
    )
  );
  count++;
}
for (i in lista) {
  if (lista[i] >= 10 && lista[i] <= 20) {
    countIntervalo++;
  } else {
    countFora++;
  }
}
alert(`Valores no intervalo de 10 a 20: ${countIntervalo} \n
Valores fora deste intervalo: ${countFora} `);

// QUESTÃO 2
let valor;
let listaValores = [];
let soma = 0;
while (true) {
  valor = Number(prompt(`QUESTÃO 2 \n --------------- \n  Valor do produto: `));
  listaValores.push(valor);
  continuar = prompt("Deseja inserir outro valor? (s/n): ");
  if (continuar == "s") {
    continue;
  } else if (continuar == "n") {
    break;
  }
}
for (var i = 0; i < listaValores.length; i++) {
  soma += listaValores[i];
}
alert(`QUESTÃO 2 \n --------------- \n Valor total da compra:  ${soma}`);
valorCliente = Number(prompt("Valor que o cliente pagou: "));
if (valorCliente > soma) {
  alert(
    `QUESTÃO 2 \n --------------- \n Retornar R$ ${
      valorCliente - soma
    } de troco para o cliente`
  );
} else {
  alert(
    `QUESTÃO 2 \n --------------- \n Ainda faltam R$ ${
      soma - valorCliente
    } para o valor total da compra`
  );
}

// Questão 3
let totalCompra = Number(
  prompt(`QUESTÃO 3 \n---------------- \n Valor total da compra: `)
);
if (totalCompra < 40) {
  alert(`Parcelamento: em até 1 vez de R$ ${totalCompra}.`);
} else if (totalCompra >= 40 && totalCompra < 60) {
  alert(`Parcelamento: em até 2 vezes de R$ ${totalCompra / 2}`);
} else if (totalCompra >= 60 && totalCompra < 80) {
  alert(`Parcelamento: em até 3 vezes de R$ ${(totalCompra / 3).toFixed(2)}`);
} else if (totalCompra >= 80 && totalCompra < 100) {
  alert(`Parcelamento: em até 4 vezes de R$ ${(totalCompra / 4).toFixed(2)}`);
} else if (totalCompra >= 100 && totalCompra < 120) {
  alert(`Parcelamento: em até 5 vezes de R$ ${(totalCompra / 5).toFixed(2)}`);
} else {
  alert(`Parcelamento: em até 6 vezes de R$ ${(totalCompra / 6).toFixed(2)}`);
}

// QUESTÃO 4
// const AnosCopa = function (start = 1930, end = 2022, step = 4) {
//   let count = 0;
//   const lista = [];
//   let ano;

//   while (count < 1) {
//     ano = alert(Number(prompt(`Ano ou 0 para sair: `)));
//     console.log(ano);
//     if (ano == 0) {
//       count++;
//       break;
//     }
//   }

//   for (let i = start; i <= end; i += step) {
//     lista.push(i);
//   }

//   if (
//     ano == lista[1942] ||
//     ano == lista[1946] ||
//     lista.includes(ano) == false
//   ) {
//     console.log("não é ano de copa");
//   } else {
//     console.log("ano de copa");
//   }
// };
// AnosCopa();
