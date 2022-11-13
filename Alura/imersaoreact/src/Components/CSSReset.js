import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  *::-webkit-scrollbar {
    width: 8px;
    height: 16px;
    border-radius: 10px;
}

*::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.backgroundLevel1};
    border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 10px;
    border: 0px solid #DE8F45;

}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase}
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      /* opacity: .5; */
      filter: contrast(0.6);
    }
  }
`;