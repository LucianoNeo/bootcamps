import { CSSReset } from '../Components/CSSReset';
import { ThemeProvider } from 'styled-components'
import ColorModeProvider, { ColorModeContext } from '../Components/Menu/ColorMode'
import { useContext } from 'react';

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {props.children}
    </ColorModeProvider>
  )
}


function MyApp({ Component, pageProps }) {

  const context = useContext(ColorModeContext)


  const theme = {
    light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
    },
    dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
    }
  };

  return (
    <>

      <ThemeProvider theme={theme[context.mode]}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  )
};
