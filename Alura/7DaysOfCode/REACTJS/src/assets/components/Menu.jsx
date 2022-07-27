import styled from 'styled-components'

const Header = styled.header`
width: 70vw;
height: 48.84px;
display: flex;
justify-content: space-between;
align-items: flex-end;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
z-index: 2;


`

export default function Menu() {
    return (
        <Header>
            <img src="./assets/img/logo.png" alt="" height={45}/>
            <div>
            <a href="#">Como fazer /</a>
            <a href="#"> Ofertas /</a>
            <a href="#"> Depoimentos /</a>
            <a href="#"> Videos /</a>
            <a href="#"> Meu Carrinho</a>
            </div>
        </Header>
     );
}