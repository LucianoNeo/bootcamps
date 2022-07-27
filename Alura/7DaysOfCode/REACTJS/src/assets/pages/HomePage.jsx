import AssinaturaNewsletter from "../components/AssinaturaNewsletter";
import Menu from "../components/Menu";
import styled from 'styled-components'

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   
`

export default function HomePage() {
    return (
        <Main>
            <img src="./assets/img/blob.png" alt="" srcset=""
                style={{
                    zIndex: 0,
                    position: 'absolute',
                    width: '40%',
                    height: '400px',
                    right: '0px',
                    top: '0',
                }}
            />
            <Menu />
            <AssinaturaNewsletter />
        </Main>
    );
}