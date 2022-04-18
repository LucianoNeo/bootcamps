function Converter() {
  //pegar elemento input por id
  var valorElemento = document.getElementById("valorCelsius");
  //pegar somente valor digitado no input
  var valor = valorElemento.value;
  //transformar em decimal
  var valorCelsiusnum = parseFloat(valor);
  var valorEmFar = valorCelsiusnum * 1.8 + 32;
  var valorEmKel = valorCelsiusnum + 273.15;
  // Colocar resultado nos inputs
  var faren = document.getElementById("valorfaren");
  faren.value = valorEmFar + "°F";
  var kelvin = document.getElementById("valorKelvin");
  kelvin.value = valorEmKel + "°K";
}