var lista = document.getElementById('lista')
var tarefa = document.getElementById('tarefa')
var item = parseInt(1)
var mudar= document.getElementById('mudar')

function adicionar() {
    if(tarefa.value ==''){
    alert("Você deve digitar uma tarefa")
    }else{
    var novoItem = `<li id="lista${item}" onmouseenter="mostraLixo(lixo${item})" onmouseleave="escondeLixo(lixo${item})"><div><input type="checkbox" onclick="marcar(item${item})"></div> <div><span id="item${item}">${tarefa.value}</span></div><div><i style="display:none" id="lixo${item}" class="fa-solid fa-trash lixo" onclick="remove(lista${item})"></i></div></li>`
    lista.innerHTML += novoItem
    item++
    tarefa.value=''
    }
}

function limpar() {
    lista.innerHTML = ''
}

function marcar(elemento) {
   elemento.classList.toggle("riscado");
}

function remove(elemento) {
    elemento.remove()
 }

function mostraLixo(lixo) {
    lixo.style.display="block"
}

function escondeLixo(lixo) {
    lixo.style.display="none"
}


  