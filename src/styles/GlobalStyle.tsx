import { Global } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro'

const GlobalStyleCss = process.env.NODE_ENV === 'production' ? css`` : css`
  html {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    ${tw`p-[40px]`}
    height: 100vh;
  }
  #root {
    height: 100%;
    ${tw`flex flex-col justify-center items-center`}
  }
`;
const GlobalStyle = () => (
  <>
    <BaseStyles />
    <Global
      styles={GlobalStyleCss}
    />
  </>
)

export default GlobalStyle