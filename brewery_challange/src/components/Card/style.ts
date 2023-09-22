import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: .3rem;

  flex-shrink: 0;

  padding: .7rem;

  width: 220px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  > h4 {
    font-size: .8rem;
    color: var(--black);
  }
`

export const SectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .2rem;

  > span {
    font-size: .8rem;
    color: var(--gray);
  }
`

export const TagType = styled.span`
  background: var(--green);

  border-radius: 6px;

  width: fit-content;

  padding: .4rem .7rem;

  font-size: .7rem;
  color: var(--white);
`