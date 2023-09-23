import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ;
    --white: #FFFFFF;
    --hover: #F9F9F9;
    --green: #00D1B2;
    --black: #363636;
    --gray: #808080;
    --yellow: #FFDD57;
    --blue: #3273DC;
    --brown: #2E2B2C;
    --red: #ED474A;
    --pink: #D4AFCD;
    --orange: #F05D23;
  }

  body {
    background-image: url('https://images.pexels.com/photos/1400255/pexels-photo-1400255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: cover; /* Isso fará com que a imagem de fundo cubra todo o corpo do documento */
    background-repeat: no-repeat; /* Isso impedirá que a imagem de fundo seja repetida */
    backdrop-filter: blur(4px);
  }
`

export default GlobalStyles