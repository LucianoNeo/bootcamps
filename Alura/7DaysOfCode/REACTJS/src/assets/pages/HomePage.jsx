import AssinaturaNewsletter from "../components/AssinaturaNewsletter";
import Menu from "../components/Menu";
import styled, { createGlobalStyle } from 'styled-components'

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   
`
const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

`
export default function HomePage() {
    return (

        <Main>
            <GlobalStyle />
            <img src="./assets/img/blob.png" alt="" 
                style={{
                    zIndex: 0,
                    position: 'absolute',
                    width: '40%',
                    height: '400px',
                    right: '0px',
                    top: '0',
                    zIndex:'-1'
                }}
            />
            <Menu />
            <AssinaturaNewsletter />
        </Main>
    );
}