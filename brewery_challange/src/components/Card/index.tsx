import React from 'react'
import { CardContainer, SectionCard, TagType } from './style'
import { IBrewery } from '@/types/@types'
import Link from 'next/link'

interface Props {
  breweryItem: IBrewery
}

const Card: React.FC<Props> = ({ breweryItem }) => {
  let tagBackgroundColor = ''
  let tagTextColor = ''

  switch (breweryItem.brewery_type) {
    case 'micro':
      tagBackgroundColor = 'var(--green)'
      tagTextColor = 'var(--white)'
      break
    case 'brewpub':
      tagBackgroundColor = 'var(--yellow)'
      tagTextColor = 'var(--black)'
      break
    case 'contract':
      tagBackgroundColor = 'var(--black)'
      tagTextColor = 'var(--white)'
      break
    case 'regional':
      tagBackgroundColor = 'var(--blue)'
      tagTextColor = 'var(--white)'
      break
    case 'proprietor':
      tagBackgroundColor = 'var(--blue)'
      tagTextColor = 'var(--white)'
      break
    case 'closed':
      tagBackgroundColor = 'var(--red)'
      tagTextColor = 'var(--white)'
      break
    case 'large':
      tagBackgroundColor = 'var(--orange)'
      tagTextColor = 'var(--white)'
      break
    default:
      tagBackgroundColor = 'var(--green)'
      tagTextColor = 'var(--white)'
      break
  }

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
        <TagType style={{ backgroundColor: tagBackgroundColor, color: tagTextColor }}>
          {breweryItem.brewery_type}
        </TagType>
      </CardContainer>
    </Link>
  )
}

export default Card