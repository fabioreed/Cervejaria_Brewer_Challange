import styled from "styled-components"

export const SelectContainer = styled.select`
  padding: .4rem 1rem;

  width: fit-content;

  color: var(--gray);
  font-size: .9rem;

  border: 2px solid var(--gray);

  border-radius: 6px;

  option {
    background: var(--white);
    color: var(--gray);

    padding: .4rem .7rem;
  }

  option:checked {
    background-color: var(--green);
    color: var(--white);
  }
`