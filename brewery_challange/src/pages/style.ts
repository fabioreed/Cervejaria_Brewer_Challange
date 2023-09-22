import Link from "next/link"
import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1rem;

  overflow-x: auto;

  padding: 1.2rem 3rem;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;

    padding: 3rem 8rem;
  }
`

export const NextPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TagLinkPagination = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: .9rem;
    color: var(--gray);

    margin: 0 1rem;

    background: var(--hover);

    border-radius: 50%;

    transition: .2s ease;

    width: 20px;
    height: 20px;

    &:hover {
      color: var(--white);

      background: var(--green);

      border-radius: 50%;

      width: 20px;
      height: 20px;
    }
  }
`