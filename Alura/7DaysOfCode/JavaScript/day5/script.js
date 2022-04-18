
var frutas = []

var laticinios = []

var congelados = []

var doces = []

var item =document.getElementById('item')

var categoria = document.getElementById('select')

var resFrutas = document.getElementById('frutas')
var resLat = document.getElementById('laticinios')
var resCong = document.getElementById('congelados')
var resDoces = document.getElementById('doces')

function cadastrar(){
  if (item.value == ''){
    alert("Você deve digitar um produto!")
     }  else
     { 
    if (categoria.value == 'Frutas'){
    var novo = item.value
    frutas.push(novo)

    }
if (categoria.value == 'Laticinios'){
  var novo = item.value
  laticinios.push(novo)

  }
  if (categoria.value == 'Congelados'){
  var novo = item.value
  congelados.push(novo)

  }
if (categoria.value == 'Doces'){
  var novo = item.value
  doces.push(novo)

  }
  }
   mostrarLista()
  }

function mostrarLista(){
  resFrutas.innerHTML = '<h1>Frutas   </h1>'
  resLat.innerHTML = '<h1>Laticínios   </h1>'  
  resCong.innerHTML = '<h1>Congelados   </h1>'  
  resDoces.innerHTML = '<h1>Doces</h1>'  
  for (let index in frutas) {
    resFrutas.innerHTML += `<p>- ${frutas[index]}</p>`
  }
  for (let index in laticinios) {
    resLat.innerHTML += `<p>- ${laticinios[index]}</p>`
  }
  for (let index in congelados) {
    resCong.innerHTML += `<p>- ${congelados[index]}</p>`
  }
  for (let index in doces) {
    resDoces.innerHTML += `<p>- ${doces[index]}</p>`
  }
 item.value =''
 item.focus()
}






















