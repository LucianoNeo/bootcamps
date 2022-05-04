function subNumPares(array){
    if (!array) return console.log(-1);
    if (!array.length) return console.log(-1);

    for (let i = 0; i < array.length; i++) {
        if(array[i] === 0){
            console.log("Este número já é zero")
        }
        else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0`)
            array[i] = 0
            
        }        
    }
    return console.log(array)
}

subNumPares([0,2,5,10,20,5,0])