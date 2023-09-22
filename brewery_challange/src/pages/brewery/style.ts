import styled from "styled-components"

export const MainDetailContainer = styled.main`
  padding: 1.2rem 3rem;

  @media (min-width: 768px) {
    padding: 3rem 8rem;
  }
`

export const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  padding: 1rem;

  border-radius: 6px;

  > h4 {
    color: var(--brown);
  }

  > span {
    color: var(--gray);
    font-size: .8rem;
  }
`

export const TypeTag = styled.span`
  background: var(--blue);

  color: var(--white);

  border-radius: 12px;

  padding: .2rem .7rem;
`