

var operacao =''
var resultado = document.getElementById('resultado')


function andamento(){
var corpo = document.getElementById('promptB')
}

function andamento2(){
document.getElementById('ok').style='display:none'
document.getElementById('promptD').style='display:block'
document.getElementById('num2').focus()
}


function seleciona(botao){
    document.getElementById('promptC').style='display:block'
    document.getElementById('num1').focus()
    document.getElementById('promptD').style='display:none'
    document.getElementById('num1').focus()
    document.getElementById('ok').style.display='inline-block'
    document.getElementById('ok2').style.display='inline-block'
    document.getElementById('num1').value=''
    document.getElementById('num2').value=''
    document.getElementById('resultado').innerHTML=''
    if (botao =='soma'){
    operacao = 'somar';
    document.getElementById(botao).style='border-color:white;color:white;'
    document.getElementById('subtrair').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
    document.getElementById('multiplicar').style='border-color:rgb(15, 163, 35)e;color:rgb(15, 163, 35);'
    document.getElementById('dividir').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
}      if (botao =='subtrair'){
    operacao= 'subtrair';
    document.getElementById(botao).style='border-color:white;color:white;'
    document.getElementById('soma').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
    document.getElementById('multiplicar').style='border-color:rgb(15, 163, 35)e;color:rgb(15, 163, 35);'
    document.getElementById('dividir').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
}   if (botao =='multiplicar'){
    operacao= 'multiplicar';
    document.getElementById(botao).style='border-color:white;color:white;'
    document.getElementById('soma').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
    document.getElementById('subtrair').style='border-color:rgb(15, 163, 35)e;color:rgb(15, 163, 35);'
    document.getElementById('dividir').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
}   if (botao =='dividir'){
    operacao= 'dividir';
    document.getElementById(botao).style='border-color:white;color:white;'
    document.getElementById('soma').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
    document.getElementById('subtrair').style='border-color:rgb(15, 163, 35)e;color:rgb(15, 163, 35);'
    document.getElementById('multiplicar').style='border-color:rgb(15, 163, 35);color:rgb(15, 163, 35);'
}   
    
}

function soma(){
var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
return (num1 + num2)

}

function subtracao(){
    var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
    return num1 - num2
}

function multiplicacao(){
    var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
    return num1 * num2
}

function divisao(){
var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
    return num1 / num2
}


function calcular(){
  
    if(num1.value == 0 || num2.value == 0){
        resultado.style.color ='red'
       resultado.innerText ='Você deve digitar 2 valores!'
       document.getElementById('num1').focus()
    }else{
        resultado.style.color ='green'
    if(operacao == 'somar'){
        resultado.innerHTML =`<p>O resultado é: ${soma()}</p>`
    }
    if(operacao == 'subtrair'){
        resultado.innerHTML =`<p>O resultado é: ${subtracao()}</p>`
    }
    if(operacao == 'multiplicar'){
        resultado.innerHTML =`<p>O resultado é: ${multiplicacao()}</p>`
    }
    if(operacao == 'dividir'){
        resultado.innerHTML =`<p>O resultado é: ${divisao()}</p>`
    }
    document.getElementById('ok2').style.display='none'
    resultado.innerHTML +=`<p><button id="reiniciar" onclick="document.location.reload(true)">REINICIAR</button><button id="sair" onclick="sair()">SAIR</button></p>`
}
}

function sair(){
    document.getElementById('promptB').style='display:none'
    document.getElementById('promptC').style='display:none'
    document.getElementById('promptD').style='display:none'
    document.getElementById('resultado').innerHTML='<p>Obrigado por utilizar a Calculadora do Neo, see ya!</p><p><button id="reiniciar" onclick="document.location.reload(true)">REINICIAR</button>'
}

function limpaTudo(){
    document.getElementById('promptB').style='display:block'
    document.getElementById('promptC').style='display:none'
    document.getElementById('promptD').style='display:none'
    document.getElementById('num1').focus()
    document.getElementById('ok').style.display='block'
    document.getElementById('ok2').style.display='none'
    document.getElementById('resultado').innerHTML=''
}

andamento()