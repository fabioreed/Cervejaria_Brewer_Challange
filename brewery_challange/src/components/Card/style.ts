import styled from "styled-components"

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .7rem;

  flex-shrink: 0;

  padding: .7rem;

  width: 220px;

  height: 160px;

  border-radius: 6px;
  border: 2px solid transparent;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  position: relative;

  transition: .2s ease;

  background: var(--white);

  > h4 {
    font-size: 1rem;
    color: var(--brown);
  }

  &:hover {
    background: var(--hover);
    border: 2px solid var(--green);
  }

  @media (min-width: 768px) {
    padding: 1.2rem .9rem;

    width: 240px;

    height: 180px;

    > h4 {
      font-size: 1.2rem;
    }
  }
`

export const SectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .2rem;
  
  > span {    
    font-size: .7rem;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    > span {
      font-size: .8rem;
    }
  }
`

export const TagType = styled.span`
  background: var(--green);

  border-radius: 12px;

  width: fit-content;

  padding: .4rem .7rem;

  font-size: .7rem;
  color: var(--white);
  
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
  @media (min-width: 768px) {
    /* position: absolute;
    top: -7px;
    right: 4px; */
  }
`