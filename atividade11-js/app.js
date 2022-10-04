// Qustão 1

const novoPreco = Number(
  prompt(`Questão 1 \n __________________ \n insira o novo preço:`)
);
const desconto = novoPreco * 0.15;
if (novoPreco - desconto > 500) {
  alert("CARO");
} else {
  alert("Barato");
}

// Qustão 2

const investimento = String(
  prompt(
    `Questão 2 \n ________________ \n Insira o tipo de investimento (poupança / renda fixa) : `
  )
);
const valor = Number(prompt("inisira o valor: "));
if (investimento == "poupança") {
  alert(`seu rendimento será: R$ ${valor + valor * 0.5}`);
} else if (investimento == "renda fixa") {
  alert(`seu rendimento será: R$ ${valor + valor * 0.1}`);
}

// Qustão 3

const altura = Number(prompt(`Questão 3 \n __________________ \n altura: `));
const sexo = String(prompt("sexo: "));

if (sexo == "masculino") {
  alert(`peso ideal: ${72 * altura - 58}`);
}
if (sexo == "feminino") {
  alert(`peso ideal: ${62 * altura - 44}`);
}

// Qustão 6

let entrada = 20;
const numPessoas = Number(
  prompt(`Quetão 6 \n __________________ \n numero de pessoas: `)
);
const numPeixes = Number(prompt("numero de peixes: "));
const totalEntrada = entrada * numPessoas;
const extra = (numPeixes - numPessoas) * 12;

alert(`valor a pagar: ${totalEntrada + extra}`);
