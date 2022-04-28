var numberElement = document.getElementById('number')
var number = 0
var buttonIncrease = document.getElementById('increase')
var buttonDecrease = document.getElementById('decrease')


buttonIncrease.addEventListener("click", increase);
buttonDecrease.addEventListener("click", decrease);

function increase() {
    number++
    numberElement.innerText = number
    if(number <0){
    numberElement.style.color='red'
    }else{
        numberElement.style.color='white'
    }
    if(number > 10){
        buttonIncrease.disabled = true
        number = 10
        numberElement.innerText = number
        alert("Você atingiu o número máximo!")
    }else{
        buttonIncrease.disabled = false
    }
}

function decrease() {
    number--
    numberElement.innerText = number
    if(number <0){
        numberElement.style.color='red'
        }else{
            numberElement.style.color='white'
        }
        if(number < 10){
            buttonIncrease.disabled = false
        }
    
}