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
    @media(max-width: 900px) {
    width: 100vw;
    }
   
`

export default function HomePage() {

    
    return (
        <>
        <Main>
            <img src="./assets/img/blob.png" alt="" 
                style={{
                    zIndex : 0,
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
            <ComoConseguir/>
            <Produtos/>
            
        </Main>
        <Footer/>
        </>
    );
}