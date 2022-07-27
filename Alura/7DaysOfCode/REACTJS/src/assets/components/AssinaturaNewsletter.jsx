import styled from "styled-components";

const Main = styled.div`
width: 70vw;
display: flex;
z-index: 2;
margin-top: 160px;
`

const Texto1 = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 27px;
color: #202020;
opacity: 0.5;
`

const Texto2 = styled.span`
font-family: 'Elsie Swash Caps', cursive;
font-size: 82px;
line-height: 94px;
color: #202020;
`
const Texto3 = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #202020;
opacity: 0.5;
`

const Input = styled.input`
width: 391px;
border: none;
background: #FFFFFF;
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding: 27px 0 28px 55px;
`
const InputButton = styled.button`
width: 194px;
height: 75px;
background: #FFCB47;
box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
border: none;
cursor: pointer;
color: #FFFFFF;
z-index: 2,
`


export default function AssinaturaNewsletter() {
    return (
        <Main>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '585px'
            }}>
                <div style={{width:'482px',display: 'flex',flexDirection: 'column',}}>
                <Texto1>Sua casa com as</Texto1>
                <Texto2>melhores {<br />} plantas</Texto2>
                <Texto3>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Texto3>
                </div>
                <div style={{ display: 'flex' }}>
                    <Input placeholder="📧 Insira seu e-mail" />
                    <InputButton>Assinar newsletter</InputButton>
                </div>
            </div>
            <div>
                <img src="./assets/img/planta-newsletter.png" alt="" srcset="" 
                style={{
                    width: '50%',
                    position:'absolute',
                    right:'150px',
                    top:'20px',
                    zIndex: 1,
                }}
                />
            </div>
        </Main>
    );
}

//width: 787px;
//height: 1183px;