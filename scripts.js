// Classe principal do Parquímetro
class Parquimetro {
  constructor(valor) {
    this.valor = valor;
    this.tabela = [
      { preco: 1.00, tempo: 30 },   // 30 min por R$1,00
      { preco: 2.00, tempo: 60 },   // 1h por R$2,00
      { preco: 3.00, tempo: 90 }    // 1h30 por R$3,00
    ];
  }

  calcular() {
    if (this.valor < 1) {
      return { mensagem: "Valor insuficiente. Insira pelo menos R$1,00." };
    }

    // Encontra a maior opção possível dentro do valor pago
    let escolhido = this.tabela[this.tabela.length - 1];
    for (let item of this.tabela) {
      if (this.valor < item.preco) break;
      escolhido = item;
    }

    let troco = (this.valor - escolhido.preco).toFixed(2);

    return {
      mensagem: `Tempo: ${escolhido.tempo} minutos<br>Troco: R$ ${troco}`
    };
  }
}

// Manipulação do DOM
document.getElementById("calcular").addEventListener("click", () => {
  let valor = parseFloat(document.getElementById("valor").value);
  let resultadoDiv = document.getElementById("resultado");

  if (isNaN(valor)) {
    resultadoDiv.innerHTML = "Digite um valor válido.";
    return;
  }

  let parquimetro = new Parquimetro(valor);
  let resultado = parquimetro.calcular();

  resultadoDiv.innerHTML = resultado.mensagem;
});
