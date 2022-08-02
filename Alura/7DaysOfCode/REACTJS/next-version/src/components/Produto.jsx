import styled from "styled-components"
import Image from 'next/image';


const CardProduto = styled.div`
display: flex;
width: 379px;
height: 200px;
background: #FFFFFF;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
overflow: hidden;
border-radius: 5px;
:hover{
    transform: scale(1.2);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.8);
    transition: 0.5s;
}
`

const Titulo = styled.strong`
font-family: 'Elsie Swash Caps', cursive;
font-size: 32px;
color: #202020;
`

const Preco = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #202020;
opacity: 0.5;
`

const Disponiveis = styled.span`
font-family: 'Montserrat';
font-weight: 400;
font-size: 14px;
color: #202020;
opacity: 0.5;
`

const Comprar = styled.div`
font-family: 'Montserrat';
font-style: normal;
display: flex;
font-weight: 400;
width: 111px;
font-size: 16px;
line-height: 20px;
color: #FFCB47;
cursor: pointer;
justify-content: space-between;
border: none;
background-color: #FFF;
align-items: center;
:hover{
    transform: scale(1.2);
}

`
const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    
`


function Produto(props) {
    return (
        <CardProduto>
            <Image src={props.img} alt=""
            style={{maxWidth:'200px'}}/>
            <ContainerTexto>
                <Titulo>{props.name}</Titulo>
                <Disponiveis>Disponíveis:  {props.quantity}</Disponiveis>
                <Preco>R$ {props.price.toFixed(2).replace('.',',')}</Preco>
                <Comprar id='comprar'>
                    <span>Comprar</span>
                    <Image src="./assets/img/seta.png" alt="" width={14} height={8}/>
                </Comprar>
            </ContainerTexto>
        </CardProduto>


    )
}

export default Produto