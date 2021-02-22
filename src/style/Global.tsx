import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .locked {
    background-color: ${({ theme }) => theme.colors.locked};
    pointer-events: none;
      div {
      color: #BDC2C4;
      }
      svg {
        fill: #BDC2C4;
      }
  }  

  .locked-card {
    opacity: 0.2;

    .locked-card-icon {
      background-image: url('/images/lock-icon.png');
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: center;
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`

export default GlobalStyle
