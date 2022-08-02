
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    margin-top: 195px;
    background-color: #FFF;
    width:90vw;
    height: 440px;
    z-index: 2;
    background-image: url("./assets/img/planta-comoconseguir.png");
    background-repeat: no-repeat;
    background-size: 60%;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right:81px ;

    @media(max-width: 900px) {
    width: 200vw;
    background-size: 70%;
    background-position: -180px;
    }
`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
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

function ComoConseguir() {
    return (
        <Container id='comoFazer'>
            <ContainerTexto>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Textoleve>
                        Como conseguir
                    </Textoleve>
                    <TextoBold>
                        minha planta
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

export default ComoConseguir