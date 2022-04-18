

var frutas = []

var laticinios = []

var congelados = []

var doces = []

var item =document.getElementById('item')
var itemRemove =document.getElementById('itemRemove')

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
document.getElementById('caixa3').style.display ='block'
    }
if (categoria.value == 'Laticinios'){
  var novo = item.value
  laticinios.push(novo)
document.getElementById('caixa3').style.display ='block'
  }
  if (categoria.value == 'Congelados'){
  var novo = item.value
  congelados.push(novo)
document.getElementById('caixa3').style.display ='block'
  }
if (categoria.value == 'Doces'){
  var novo = item.value
  doces.push(novo)
document.getElementById('caixa3').style.display ='block'
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

function remover(){
  if(itemRemove.value == ''){
    alert('Você deve digitar um item!')
  }else{
    if(frutas.indexOf(itemRemove.value) != -1){
			frutas.splice(frutas.indexOf(itemRemove.value), 1);
			alert(`O item ${itemRemove.value.toUpperCase()} foi removido com sucesso!`)
      
  }else if(laticinios.indexOf(itemRemove.value) != -1){
			laticinios.splice(laticinios.indexOf(itemRemove.value), 1);
			alert(`O item ${itemRemove.value.toUpperCase()} foi removido com sucesso!`)
		} else if (doces.indexOf(itemRemove.value) != -1){
			doces.splice(doces.indexOf(itemRemove.value), 1);
			alert(`O item ${itemRemove.value.toUpperCase()} foi removido com sucesso!`)
		} else if (congelados.indexOf(itemRemove.value) != -1){
			congelados.splice(congelados.indexOf(itemRemove.value), 1);
			alert(`O item ${itemRemove.value.toUpperCase()} foi removido com sucesso!`)
		} else {
			alert('Não foi possível encontrar o item dentro da lista!')
		}
    itemRemove.value=''
    mostrarLista()
    if(frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0 ){
     document.getElementById('caixa3').style.display ='none'
     }
}
}