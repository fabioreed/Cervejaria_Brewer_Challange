import Link from 'next/link'
import React from 'react'

const Card = ({ breweryItem }: any) => {
  return (
    <div>
      <li key={breweryItem.id}>
        {breweryItem.website_url ? (
          <Link href={`/brewery/${breweryItem.id}`}>
            <h4>{breweryItem.name}</h4>
            <span>{breweryItem.address_1}</span>
            <span>{breweryItem.phone}</span>
            <span>{breweryItem.city}</span>
            <span>{breweryItem.state}</span>
            <span>{breweryItem.state}</span>
          </Link>
        ) : (
          <div>
            <h4>{breweryItem.name}</h4>
            <span>{breweryItem.address_1}</span>
            <span>{breweryItem.phone}</span>
            <span>{breweryItem.city}</span>
            <span>{breweryItem.state}</span>
            <span>{breweryItem.state}</span>
          </div>
        )}
      </li>
    </div>
  )
}

export default Card