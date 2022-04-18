var numeroSecreto = parseInt(Math.random() * 11);

var acertou = document.getElementById("img-resultado");
var errou = document.getElementById("img-resultado2");
var restart = document.getElementById("restart");
var tentativas = 3;

function refresh() {
  window.location.href = window.location.href;
}

function Chutar() {
  while (tentativas > 0) {
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto) {
      var resultado = (document.getElementById("resultado").innerHTML =
        "Parabéns, você acertou o número " + numeroSecreto);
      errou.style.display = "none";
      acertou.style.display = "block";
      restart.style.display = "block";
      restart.onclick = refresh;
      break;
    } else if (chute > 10 || chute < 0) {
      acertou.style.display = "none";
      errou.style.display = "none";
      var resultado = (document.getElementById("resultado").innerHTML =
        "Você deve digitar um número de 0 a 10");
      break;
    } else if (chute > numeroSecreto) {
      tentativas--;
      var resultado = (document.getElementById("resultado").innerHTML =
        "O numero secreto é MENOR que o digitado, e você ainda tem " +
        tentativas +
        " tentativas");
      acertou.style.display = "none";
      errou.style.display = "block";
      break;
    } else if (chute < numeroSecreto) {
      tentativas--;
      var resultado = (document.getElementById("resultado").innerHTML =
        "O numero secreto é MAIOR que o digitado, e você ainda tem " +
        tentativas +
        " tentativas");
      acertou.style.display = "none";
      errou.style.display = "block";
      break;
    }
  }
  if (tentativas == 0) {
    var resultado = (document.getElementById("resultado").innerHTML =
      "Suas tentativas acabaram, o número era " + numeroSecreto);
    restart.style.display = "block";
    restart.onclick = refresh;
  }
}
