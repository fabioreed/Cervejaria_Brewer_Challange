import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
  /* Reset de estilos */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default ResetStyles