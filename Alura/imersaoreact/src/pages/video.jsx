import React, { useContext } from 'react';
import styled from "styled-components";
import Menu from '../Components/Menu';
import { VideoContext } from '../context/VideoContext';

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

  const videoContext = useContext(VideoContext)
  console.log(videoContext.title.current)

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,

      }}>
        <Menu />
        <StyledVideoSection>
          <h1>{videoContext.title.current}</h1>
          <iframe width="480" height="315"
            src={videoContext.url.current}>
          </iframe>
        </StyledVideoSection>
      </div>
    </>
  )
}
