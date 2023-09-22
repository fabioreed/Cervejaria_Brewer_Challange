import React from 'react'
import { CardContainer, SectionCard, TagType } from './style'
import { IBrewery } from '@/types/@types'
import Link from 'next/link'

interface Props {
  breweryItem: IBrewery
}

const Card: React.FC<Props> = ({ breweryItem }) => {

  return (
    <Link  href={`/brewery/${breweryItem.id}`}>
      <CardContainer key={breweryItem.id}>
        <h4>{breweryItem.name}</h4>
        <SectionCard>
          <span>{breweryItem.address_1}</span>
          <span>{breweryItem.phone}</span>
          <span>{breweryItem.city}</span>
          <span>{breweryItem.state}</span>
        </SectionCard>
        <TagType>{breweryItem.brewery_type}</TagType>
      </CardContainer>
    </Link>
  )
}

export default Card