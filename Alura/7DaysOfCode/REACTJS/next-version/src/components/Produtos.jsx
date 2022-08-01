import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Produto from './Produto'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    width: 90vw;
    z-index: 2;
    justify-content: center; 
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

    @media(max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
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


    const [produtos,setProdutos] = useState()
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

if (isLoading) return <TextoBold>Carregando produtos</TextoBold>

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
            {produtos.map((produto, key) => {
                    return(
                        <Produto 
                        key={key}
                        img = {produto.img}
                        name = {produto.name}
                        preco = {produto.preco}
                        />
                    )
                })}
            </ContainerProdutos>
        </Container>
    )
}

export default Produtos