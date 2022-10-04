// Qustão 1

const jantar = Number(
  prompt(`Qustão 1 \n __________________ \n valor do jantar: `)
);
const garcon = jantar * 0.1;
const total = jantar + garcon;
alert(`taxa do garcon R$: ${garcon.toFixed(2)} \n
total: ${total.toFixed(3)}`);

// Questão 2

const duracaoDias = Number(
  prompt(`Qustão 2 \n __________________ \n informe a quantidade de dias : `)
);
const duracaoHoras = Number(prompt("informe a quantidade de horas : "));
const totalHoras = duracaoDias * 24 + duracaoHoras;
alert(`Duração em horas: ${totalHoras}`);

// Qustão 3

const valorConta = Number(
  prompt(`Questão 3 \n __________________ \n valor da conta: `)
);
const totalClientes = Number(prompt("Total de clientes: "));
const valorPago = valorConta / totalClientes;
alert(`Valor a ser pago por cliente é: R$ ${valorPago} reais`);

// Quetão 4

const valorProduto = Number(
  prompt(`Questão 4 \n __________________ \n valor de produto: `)
);
const valorDesconto = valorProduto * 0.1;
const valorTotal = valorProduto - valorDesconto;
alert(`Valor de produto: ${valorProduto} \n
Opções de pagamento: \n
> cartão (em até 3 vezes ( R$ ${valorTotal / 3}) reais\n
> boleto \n
>Á vista ( R$ ${valorTotal} reais)
`);

// Questão 5

const salario = 1200;
const vendas = Number(
  prompt(`Questão 5 \n __________________ \n total de vendas: `)
);
const bonus = vendas * 0.15;
const salarioTotal = salario + bonus;

alert(`seu bonus este mês é R$ ${bonus} \n
seu salario total este mês é R$ ${salarioTotal}`);

// Qustão 6

const eleitores = 15000;
const votosValidos = 13100;
const votosBrancos = 1500;
const votosNulos = 400;

alert(`Total de eleitores: ${eleitores} \n
percentual de votos válidos: ${((100 * votosValidos) / eleitores).toFixed(
  2
)} % \n
percentual de votos em branco: ${((100 * votosBrancos) / eleitores).toFixed(
  2
)} % \n
percentual de votos nulos: ${((100 * votosNulos) / eleitores).toFixed(2)} % \n
`);
