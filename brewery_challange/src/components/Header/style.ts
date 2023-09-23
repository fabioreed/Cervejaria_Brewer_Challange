import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: .2rem;

  width: 100%;

  background: var(--brown);

  padding: 1.2rem .8rem;

  > img {
    width: 60px;
  }

  @media (min-width: 768px) {
    padding: 0rem 8rem;

    > img {
      width: 140px;
    }
  }
`

export const TitleHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    color: var(--white);
    font-size: 1rem;
  }

  > p {
    color: var(--gray);
    font-size: .6rem;
    font-style: italic;
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 1.7rem;
    }

    > p {
      font-size: .9rem;
    }
  }
`