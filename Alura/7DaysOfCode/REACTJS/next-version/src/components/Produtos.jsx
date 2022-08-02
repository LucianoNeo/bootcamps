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
    padding-top: 50px;
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
const Filtros = styled.div`
    padding: 10px;
    display: flex;
    width: 97%;
    justify-content: flex-end;
    gap: 10px;
`

const Ordenar = styled.select`
font-family: 'Montserrat';
  font-size: 20px;
  font-style: normal;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  
`

const Precos = styled.input`
font-family: 'Montserrat';
  font-size: 22px;
  font-style: normal;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  width: 120px;
  border: 0;
  //text-align: end;
`
const InputButton = styled.button`
width: 100px;
background: #FFCB47;
box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
font-family: 'Montserrat';
font-style: normal;
font-size: 18px;
border: none;
cursor: pointer;
color: #FFFFFF;
z-index: 2;
opacity: 0.8;
:hover{
    opacity: 1;
}
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
                <Filtros>
                    <Textoleve>
                        Ordenar por:
                    </Textoleve>
                    <Ordenar name="selectProdutos" id="selectProdutos">
                        <option value="Nome">Nome</option>
                        <option value="Preço">Preço</option>
                    </Ordenar>
                    <Textoleve>
                        Preço Mínimo:
                    </Textoleve>
                    <Precos placeholder='R$'></Precos>
                    <Textoleve>
                        Preço Máximo:
                    </Textoleve>
                    <Precos placeholder='R$'></Precos>
                    <InputButton>Filtrar</InputButton>
                </Filtros>
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