import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Produto from './Produto'
import ProdutoEmFalta from './ProdutoEmFalta'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 99vw;
    padding: 0 20px;
    z-index: 2;
    justify-content: flex-start; 
    margin-top: 50px;
    @media(max-width: 900px) {
    width: 200vw;
    
    
    }

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
    @media(max-width: 900px) {
    flex-direction: column;
    }
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
  padding: 0px 10px;
  text-align: center;
  font-style: normal;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  width: 120px;
  border: 0;
  @media(max-width: 900px) {
    width: 100%;
    }
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

    function ordenaPorNome(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    function ordenaPorPreço(a, b) {
        if (a.price < b.price)
            return -1;
        if (a.price > b.price)
            return 1;
        return 0;
    }


    const [produtosBase, setProdutosBase] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [ordem, setOrdem] = useState('nome')
    const [minprice, setMinPrice] = useState(1)
    const [maxprice, setMaxPrice] = useState(999)
    async function pegaDados() {

    }

    useEffect(() => {
        axios.get('https://casaverdebyneo.vercel.app/api/produtos/')
            .then((response) => {
                setIsLoading(true)
                setProdutosBase(response.data.sort(ordenaPorNome))
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])



    function minMax(value) {
        if (maxprice == ''){
            setMaxPrice(999)
        }
        if (value.price >= minprice && value.price <= maxprice)
            return value;
    }

    let produtosAlterados =[]

    if (!produtosBase) { return }
    if (ordem === 'nome') {
        produtosAlterados = produtosBase.filter(minMax).sort(ordenaPorNome)
    }
    if (ordem === 'preço') {
         produtosAlterados = produtosBase.filter(minMax).sort(ordenaPorPreço)
    }


    if (isLoading) return <Textoleve>Carregando produtos...</Textoleve>

    function handleOrdem() {
        const valor = document.getElementById('selectProdutos').value
        if (!valor) {
            alert('Selecione um campo!')
        }
        if (valor == 'nome') {
            setOrdem('nome')
            produtosAlterados = produtosAlterados.sort(ordenaPorNome)
        }
        if (valor == 'preço') {
            setOrdem('preço')
            produtosAlterados = produtosAlterados.sort(ordenaPorPreço)
        }
    }


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
                        
                        <option value='nome'>Nome</option>
                        <option value='preço'>Preço</option>
                    </Ordenar>
                    <InputButton
                        onClick={handleOrdem}
                    >Ordenar</InputButton>
                    <Textoleve>
                        Preço Mínimo:
                    </Textoleve>
                    <Precos
                        placeholder='R$' value={minprice}
                        onChange={e => setMinPrice(e.target.value)}
                    ></Precos>
                    <Textoleve>
                        Preço Máximo:
                    </Textoleve>
                    <Precos placeholder='R$' value={maxprice}
                        onChange={e => setMaxPrice(e.target.value)}
                    ></Precos>

                </Filtros>
            </ContainerTexto>
            <ContainerProdutos>
                {produtosAlterados.map((produto, key) => {
                    if (produto.quantity > 0)
                        return (
                            <Produto
                                key={key}
                                img={produto.img}
                                name={produto.name}
                                price={produto.price}
                                quantity={produto.quantity}
                            />
                        )
                    else {
                        return (
                            <ProdutoEmFalta
                                key={key}
                                img={produto.img}
                                name={produto.name}
                                price={produto.price}
                                quantity={produto.quantity}
                            />
                        )
                    }
                })}

            </ContainerProdutos>
        </Container>
    )
}

export default Produtos