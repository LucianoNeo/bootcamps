function Converter() {
  //pegar elemento input por id
  var valorElemento = document.getElementById("valordolar");
  //pegar somente valor digitado no input
  var valor = valorElemento.value;
  //transformar em decimal
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  var valorEmEuro = valorEmDolarNumerico * 0.91;
  var valorEmBTC = valorEmDolarNumerico * 0.000026;

  //Selecionar div
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em reais é R$" + valorEmReal;
  /*Imprimir no campo
   elementoValorConvertido.innerHTML = valorConvertido;
   */
  // Colocar resultado nos inputs
  var reais = document.getElementById("valorreais");
  reais.value = "R$" + valorEmReal;
  var euro = document.getElementById("valoreuro");
  euro.value = "€" + valorEmEuro.toFixed(2);
  var btc = document.getElementById("valorbtc");
  btc.value = "₿" + valorEmBTC.toFixed(8);
}