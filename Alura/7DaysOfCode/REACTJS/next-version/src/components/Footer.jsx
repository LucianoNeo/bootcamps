import styled from "styled-components"
import Social from "./Social"

const FooterContainer = styled.footer`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 50px;
color: #222;
font-family: 'Montserrat';
font-size: 18px;
gap: 20px;
@media(max-width: 900px) {
    width: 200vw;
    
    
    }
`

export default function Footer() {
    return (
        <FooterContainer>
            <p>Desenvolvido por LucianoNeo </p><Social/>
        </FooterContainer>
    )
}