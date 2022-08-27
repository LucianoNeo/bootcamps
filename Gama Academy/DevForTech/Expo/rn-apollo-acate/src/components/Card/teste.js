const array = [
    {
        id: 1,
        name: 'jose',
    },
    {
        id: 2,
        name: 'joao',
    },
    {
        id: 3,
        name: 'maria',
    },

]

if(array.some(item => item.id == 4)){
    console.log('nao pode')
}else{
    console.log('adiciona')
}