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

  border-radius: 8px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  position: relative;

  transition: .2s ease;

  > h4 {
    font-size: 1rem;
    color: var(--brown);
  }

  &:hover {
    background: var(--hover);
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

  position: absolute;
  top: -7px;
  right: 4px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`