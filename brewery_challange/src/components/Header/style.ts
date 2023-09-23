import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: .2rem;

  width: 100%;

  background: var(--brown);

  padding: 1.2rem 3rem;

  > img {
    width: 140px;
  }

  @media (min-width: 768px) {
    padding: 0rem 8rem;
  }
`

export const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: var(--white);
    font-size: 1.7rem;
  }

  > p {
    color: var(--gray);
    font-size: .9rem;
    font-style: italic;
  }
`