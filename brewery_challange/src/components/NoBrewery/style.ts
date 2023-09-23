import styled from "styled-components"

export const NoneContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  > h2 {
    color: var(--gray);
    font-size: 1.2rem;
    font-style: italic;
  }

  > img {
    width: 400px;
  }
`