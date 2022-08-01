import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    margin-top: 44px;
    background-color: #FFF;
    width: 90vw;
    height: 568px;
    z-index: 2;
    justify-content: center;
    
`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    height: 440px;
    justify-content: space-around;
    padding-left: 21px;
    padding-top: 58px;
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
font-size: 42px;
line-height: 94px;
color: #202020;
`

const Separador = styled.div`
    display:flex;
    align-items:center; 
    gap:16px;
`

const Marcador = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #FFCB47;
`


function Produtos() {
    return (
        <Container id='ofertas'>
            
            <ContainerTexto>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Textoleve>
                        Conheça nossos
                    </Textoleve>
                    <TextoBold>
                        produtos
                    </TextoBold>
                </div>

                <Separador>
                    <Marcador />
                    <Textoleve>
                        Escolha suas plantas
                    </Textoleve>
                </Separador>


                <Separador>
                    <Marcador />
                    <Textoleve>
                        Faça seu pedido
                    </Textoleve>
                </Separador>

                <Separador>
                    <Marcador />
                    <Textoleve>
                        Aguarde na sua casa
                    </Textoleve>
                </Separador>
            </ContainerTexto>
        </Container>
    )
}

export default Produtos