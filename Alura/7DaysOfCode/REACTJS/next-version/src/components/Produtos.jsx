import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Produto from './Produto'
import ProdutoEmFalta from './ProdutoEmFalta'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 99vw;
    z-index: 2;
    justify-content: flex-start; 
    margin-top: 50px;

`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;
`
const ContainerProdutos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 4px;
    padding-top: 100px;
    padding-bottom: 50px;
    height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 500px;

    
`
const Textoleve = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 27px;
color: #202020;
opacity: 0.5;
`
const TextoBold = styled.strong`
font-family: 'Elsie Swash Caps', cursive;
font-size: 82px;
line-height: 94px;
color: #202020;
`

function Produtos() {


    const [produtos, setProdutos] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:3000/api/produtos/')
            .then((response) => {
                setIsLoading(true)
                setProdutos(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Textoleve>Carregando produtos...</Textoleve>

    function retornaDisponiveis(produto) {
        if (produto.quantity > 0)
            return produto;
    }
    function retornaIndisponiveis(produto) {
        if (produto.quantity == 0)
            return produto;
    }
    const disponiveis = produtos.filter(retornaDisponiveis)
    const indisponiveis = produtos.filter(retornaIndisponiveis)

    return (
        <Container id='plantas'>

            <ContainerTexto>
                <Textoleve>
                    Conheça nossas
                </Textoleve>
                <TextoBold>
                    plantas
                </TextoBold>
            </ContainerTexto>
            <ContainerProdutos>
                {disponiveis.map((produto, key) => {
                    return (
                        <Produto
                            key={key}
                            img={produto.img}
                            name={produto.name}
                            price={produto.price}
                            quantity={produto.quantity}
                        />
                    )
                })}
                {indisponiveis.map((produto, key) => {
                    return (
                        <ProdutoEmFalta
                            key={key}
                            img={produto.img}
                            name={produto.name}
                            price={produto.price}
                            quantity={produto.quantity}
                        />
                    )
                })}
            </ContainerProdutos>
        </Container>
    )
}

export default Produtos