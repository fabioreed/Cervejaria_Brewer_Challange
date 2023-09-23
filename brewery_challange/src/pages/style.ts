import Link from "next/link"
import styled from "styled-components"

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 0 1rem 3rem;

  height: 100vh;

  @media (min-width: 768px) {
    padding: 3rem 8rem;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  gap: 1rem;

  overflow-x: auto;

  padding: 1.2rem 0;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;

    padding: 0 0;

    overflow: hidden;
  }
`

export const NextPageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 1.2rem 3rem;

  @media (min-width: 468px) {
    justify-content: center;
    gap: 1rem;
  }
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