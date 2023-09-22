import styled from "styled-components"

export const ListContainer = styled.ul`
  display: flex;

  overflow-x: auto;

  padding: 1.2rem 3rem;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`