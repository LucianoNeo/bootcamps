let cart = []

let phone = {
    name: 'Galaxy Qualquer coisa',
    price: 3000
}

let computer = {
    name: 'Computer',
    price: 5000
}

// 1 parte adicionar os 2 produtos em nosso carrinho 

cart.push(phone, computer)
console.log('Conteúdo do carrinho:')
console.log(cart)

//  Calcular quantos itens temos no carrinho

console.log(`O carrinho possui ${cart.length} itens`)

// Calcular preço final e converter para real

let valorTotal = 0
cart.map(item => valorTotal += item.price)
const valorTotalFormatado = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(valorTotal);
console.log(`O valor total do carrinho é de: ${valorTotalFormatado}`)
valorTotalFormatado 

// INICIAR QUOKKA CTRL + K + Q 
