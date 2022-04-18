
var inpNome = document.getElementById('input1')
var inpIdade = document.getElementById('input2')
var inpLing = document.getElementById('input3')
var resultado = document.getElementById('resultado')

function pergunta(){
    document.getElementById('div1').style.display='block'
    var nome = prompt('Qual o seu nome')
    inpNome.value = "R: "+nome
    document.getElementById('div2').style.display='block'
    var idade = prompt('Qual a sua idade')
    inpIdade.value = "R: "+idade
    document.getElementById('div3').style.display='block'
    var ling = prompt('Qual linguagem de programação você está estudando?')
    inpLing.value = "R: "+ling
    resultado.innerHTML=`<p>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}</p>`
    //resultado.innerHTML+=`<p>Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO</p>`
    var pergunta = prompt(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO`)
    if (pergunta == 1){
        resultado.innerHTML+=`<p>Muito bom! Continue estudando e você terá muito sucesso.</p>`
    }
    if (pergunta == 2){
        resultado.innerHTML+=`<p>Ahh que pena... Já tentou aprender outras linguagens?</p>`
    }
}

pergunta()