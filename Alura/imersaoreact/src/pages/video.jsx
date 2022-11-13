import { useRouter } from "next/router";
import React from 'react';
import styled from "styled-components";
import Menu from '../Components/Menu';


export const StyledVideoSection = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  margin-top: 60px;
  h1 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  
`;



export default function Video() {

  const router = useRouter();

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,

      }}>
        <Menu searchBar={false} />
        <StyledVideoSection>

          <iframe width="480" height="315"
            src={`https://www.youtube.com/embed/${router.query.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          >

          </iframe>
          <h1 style={{ paddingTop: '10px' }}>{router.query.title}</h1>
        </StyledVideoSection>
      </div>
    </>
  )
}
