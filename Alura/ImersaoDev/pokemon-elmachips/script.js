var carta1 = {
  nome: "Bulbasaur",
  imagem: "http://4.bp.blogspot.com/-m4bEdJ5cCtI/VN-EdMQiq3I/AAAAAAAABFY/AywDiBRXkR0/s280/1%2BBulba.png",
  atributos: {
    força: 10000,
    ataque: 7000,
    defesa: 2000,
    agilidade: 50
  }  
};

var carta2 = {
  nome: "Charmander",
  imagem: "http://4.bp.blogspot.com/-CtPFJZM_pVE/VN-FFOKeuLI/AAAAAAAABJA/cOCGqfwaBO4/s280/4%2BChar.png",
  atributos: {
    força: 25000,
    ataque: 5000,
    defesa: 7000,
    agilidade: 35
  }  
};

var carta3 = {
  nome: "Squirtle",
  imagem: "http://1.bp.blogspot.com/-AT-hECFoMS4/VN-FbkILk-I/AAAAAAAABKw/46Ya6JPbJbg/s280/7%2BSquir.png",
  atributos: {
    força: 20000,
    ataque: 8000,
    defesa: 10000,
    agilidade: 40
  }  
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;
var viraCarta = document.getElementById("carta2")
var heightPage = document.body.scrollHeight;

function sortearCarta() {
  var ref = document.getElementById("ref")
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  
  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  ref.style="display:flex;";
  exibirOpcoes();
  window.scrollTo(0, 270);
  exibirCartaJogador();
 
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  //for (var atributo in cartaJogador.atributos) {
    opcoesTexto = "<h1>Posicione o mouse sob a carta para ver seus atributos</h1>"
  //}
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributo() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar(viracarta) {
  var radioAtributos = document.getElementsByName("atributo");
  var atributoSelecionado = obtemAtributo();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var viraCarta = document.getElementById("carta2")
  if (valorCartaJogador == null){
    elementoResultado.innerHTML = "Você deve selecionar um atributo para continuar!"
    return;
  }
  else if (valorCartaJogador > valorCartaMaquina && valorCartaJogador != null) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador && valorCartaJogador != null) {
    elementoResultado.innerHTML = "Você perdeu...";
  } else {
    elementoResultado.innerHTML = "Houve um empate, tente de volta";
  }
   viraCarta.style ="object-position: -138px 0px";
  
  window.scrollTo(0 , 500);
  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnReiniciar").disabled = false;
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta1")
  var divCartaMaquina ="<img src="+cartaMaquina.imagem+" class='carta2'id='carta2'>";
  divCartaJogador.innerHTML = "<div><img src="+cartaJogador.imagem+" class='carta1'>"+divCartaMaquina+"</div>";
  var divOpcoes = document.getElementById("opcoes")
  
  var opcoesTexto =""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + "<br>";
  }
  divOpcoes.innerHTML = "<h1>Posicione o mouse sobre a carta para visualizar os atributos </h1>" + opcoesTexto;
  divOpcoes.style.background = "rgba(255, 255, 255, 0.8)";
}

function reiniciar(){
  var divCartaJogador = document.getElementById("carta1")
  var divOpcoes = document.getElementById("opcoes")
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  divCartaJogador.innerHTML ="";
  divOpcoes.innerHTML = "";
  divOpcoes.style.background = "rgba(255, 255, 255, 0.0)";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  window.scrollTo(0 , 10);
}