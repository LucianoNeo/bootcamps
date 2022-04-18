var listaFilmes = [
  "https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg"
];
var listaNomes = ["The Batman", "Avatar"];

filmesTela();

function adicionarFilme() {
  var link = document.getElementById("filme").value;
  var nome = document.getElementById("nomeFilme").value;
  if (link.endsWith(".jpg")) {
    listaFilmes.push(link);
    listaNomes.push(nome);
    filmesTela();
  } else {
    alert("Escolha uma imagem no formato .jpg");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function filmesTela() {
  var mostrarFilme = document.getElementById("mostrarFilmes");
  mostrarFilme.innerHTML = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    mostrarFilme.innerHTML = mostrarFilme.innerHTML + '<div class="box"><h3>' +listaNomes[i] +'</h3> <img src="' + listaFilmes[i] +'"/></div>';
  }
}

function removerFilme(){
  listaFilmes.pop();
  listaNomes.pop();
  filmesTela();
}