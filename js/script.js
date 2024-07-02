const btnCalcular = document.querySelector(".calcular");
const custoTotal = document.querySelector(".custo-atual");
const resultText = document.querySelector(".result");

function pegarValores() {
  const inputCompra = document.querySelector(".input-compra").value;
  const inputVenda = document.querySelector(".input-venda").value;
  const inputCusto = document.querySelector(".input-custo").value;

  calcularPreco(inputCompra, inputVenda, inputCusto);
}

function calcularPreco(compra, venda, custo) {
  const valueCartao = document.querySelector("#cartao");
  const valueComissao = document.querySelector("#comissao");
  const cartao = parseInt(valueCartao.value) / 100;
  const comissao = parseInt(valueComissao.value) / 100;

  const diferencaComapraEVenda = parseInt(venda - compra);

  const impostoFederal = (diferencaComapraEVenda * 9.25) / 100;

  const custoImposto = impostoFederal + Number(custo);

  const custoCartao = custoImposto * cartao + custoImposto;
  const custoComissao = custoCartao * comissao + custoCartao;

  custoTotal.innerHTML = custoComissao.toFixed(2);

  let porcentagem = custoComissao * (5 / 100) + custoComissao;

  console.log(porcentagem);

  if (porcentagem <= venda) {
    resultText.innerHTML = `<p>Venda teve saldo positivo, venda aprovada</p>`;
  } else {
    resultText.innerHTML = `<p style="color: red">Venda teve saldo negativo, venda negada</p>`;
  }
}

function handleClick() {
  pegarValores();
}

btnCalcular.addEventListener("click", handleClick);
