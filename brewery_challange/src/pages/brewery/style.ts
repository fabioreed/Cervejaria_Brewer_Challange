import Link from "next/link"
import styled from "styled-components"

export const MainDetailContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  background: var(--white);

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

export const BackBtn = styled(Link)`
  background: var(--green);

  color: var(--white);
  font-size: .8rem;

  padding: .4rem;
  width: fit-content;

  border-radius: 6px;

  transition: .2s ease;

  &:hover {
    background: var(--brown);
  }
`