import AssinaturaNewsletter from "../src/components/AssinaturaNewsletter";
import Menu from "../src/components/Menu";
import styled from 'styled-components'
import ComoConseguir from "../src/components/ComoConseguir";
import Produtos from "../src/components/Produtos";
import { useEffect, useState } from "react";
import Footer from "../src/components/Footer";

const Main = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url("./assets/img/blob.png");
    background-repeat: no-repeat;
    background-size: 800px;
    background-position-x: right;
    @media(max-width: 900px) {
    width: 211vw;
    background-size: 400px;
    }
   
`

export default function HomePage() {

    
    return (
        <>
        <Main>
            <Menu />
            <AssinaturaNewsletter />
            <ComoConseguir/>
            <Produtos/>
            
        </Main>
        <Footer/>
        </>
    );
}