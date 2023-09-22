import styled from "styled-components"

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