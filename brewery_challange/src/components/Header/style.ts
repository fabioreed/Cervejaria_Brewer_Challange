import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: .2rem;

  width: 100%;

  background: var(--brown);

  padding: 1.2rem 3rem;

  > h1 {
    color: var(--white);
    font-size: 1.4rem;
  }

  > p {
    color: var(--gray);
    font-size: .9rem;
    font-style: italic;
  }
`