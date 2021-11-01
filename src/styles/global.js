import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --rich-black: #000814;
    --oxford-blue: #001D3D;
    --prussian-blue: #003566;
    --mikado-yellow: #FFC300;
    --goldweb-golde: #FFD60A;
    --white: #fff;
    --gray: #e5e5e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background: var(--gray);
    color: var(--mikado-yellow)
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }  

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;