import styled from 'styled-components'

const Header = styled.header`
width: 80vw;
height: 48.84px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
z-index: 5;


@media(min-width: 920px) {
  
        flex-direction: row;
        padding: 0;
        padding-left: 16px;
        align-items: flex-end;
    }

`

const Navbar = styled.ul`
display: flex;
list-style: none;
z-index: 2;
flex: 1;
justify-content: center;
flex-wrap: wrap;
font-size: 12px;

li a {
    display: inline-block;
    font-weight: 400;
    
    line-height: 1.1;
    text-decoration: none;
    color: #202020;
    padding: 8px;
    :hover{
    font-weight: bold;
    }
}
    @media(min-width: 920px) {
    li {
        font-size: 16px;
    }
}

`

export default function Menu() {
    return (
        <Header>
            <img src="./assets/img/logo.png" alt="" height={45} />
            <nav>
                <Navbar>
                    <li>
                        <a href="#comoFazer">Como fazer</a>
                        /
                    </li>
                    <li>
                        <a href="#plantas"> Nossas Plantas</a>
                        /
                    </li>
                    <li>
                        <a href="#"> Depoimentos</a>
                        /
                    </li>
                    <li>
                        <a href="#"> Videos</a>
                        /
                    </li>
                    <li>
                        <a href="#"> Meu Carrinho</a>
                    </li>
                </Navbar>
            </nav>
        </Header>
    );
}