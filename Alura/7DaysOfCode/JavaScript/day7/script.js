

var operacao = document.getElementById('operacao')
var resultado = document.getElementById('resultado')


window.onload = function(){
    var corpo = document.getElementById('promptB')
corpo.innerHTML += '<p>Selecione a operação que deseja fazer:</p>'
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
    if(num1.value == '' || num2.value == ''){
        resultado.style.color ='red'
       resultado.innerText ='Você deve digitar 2 valores!'
    }else{
        resultado.style.color ='green'
    if(operacao.value == 'somar'){
        resultado.innerText =`O resultado é: ${soma()}`
    }
    if(operacao.value == 'subtrair'){
        resultado.innerText =`O resultado é: ${subtracao()}`
    }
    if(operacao.value == 'multiplicar'){
        resultado.innerText =`O resultado é: ${multiplicacao()}`
    }
    if(operacao.value == 'dividir'){
        resultado.innerText =`O resultado é: ${divisao()}`
    }
}
}