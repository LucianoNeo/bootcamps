import { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
width: 70vw;
display: flex;
z-index: 2;
margin-top: 160px;
`
const Container = styled.div`
    display: 'flex',
    flex-direction= 'flex';
    max-width: '585px';
    &:after {
      content: "";
      display: block;
      width: 787px;
      height: 975px;
      background-image: url('./assets/img/planta-newsletter.png');
      position: absolute;
      --baseDistance: -287px;
      top: calc(var(--baseDistance) + 250px);
      right: 0;
      z-index: -1;
      pointer-events: none;
  }
`
const WrapperTexto = styled.div`
    max-width: 482px; 
    display: flex;
    flex-direction: column;
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

const Texto2 = styled.strong`
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
const FormEmail = styled.form`
margin-top: 37px;
display: flex;
flex-direction: row;
    &:hover {
  box-shadow: 10px 10px 30px 0px #0000002e;
  }
`
const Input = styled.input`

  flex: 1;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 46px;
  background-image: url("./assets/img/mail.png");
  background-repeat: no-repeat;
  background-position: 16px center;
  outline-color: #ffcb47;
  box-shadow: 10px 10px 30px 0px #0000000f;
  border: 0;
  
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
z-index: 2;
:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}

`


export default function AssinaturaNewsletter() {
    const [buttonDisabled, setbuttonDisabled] = useState(true)
    const [emailValue, setEmailValue] = useState('')

    function handleChange(e) {
        setEmailValue(e.target.value)
    }

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        re.test(email) ? setbuttonDisabled(false) : setbuttonDisabled(true);
    }


    useEffect(() => {
        validateEmail(emailValue)
    }, [emailValue])


    return (
        <Main>
            <Container>
                <WrapperTexto>
                    <Texto1>Sua casa com as</Texto1>
                    <Texto2>melhores {<br />} plantas</Texto2>
                    <Texto3>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Texto3>
                </WrapperTexto>
                <FormEmail
                    onSubmit={(e) => {
                        e.preventDefault()
                        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${emailValue}`)
                        setEmailValue('')
                    }}
                >
                    <Input
                        value={emailValue}
                        onChange={handleChange}
                        placeholder=" Insira seu e-mail" type='email' />

                    <InputButton
                        disabled={buttonDisabled}
                        type='submit'
                    >Assinar newsletter</InputButton>
                </FormEmail>
            </Container>

        </Main>
    );
}
