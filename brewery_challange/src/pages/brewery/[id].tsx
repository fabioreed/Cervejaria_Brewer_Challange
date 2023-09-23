import React from "react"
import Header from "@/components/Header"
import { IBrewery } from "@/types/@types"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import { BackBtn, CardDetailContainer, MainDetailContainer, TypeTag } from "./style"
import MapComponent from "@/components/Map"

interface BreweryProps {
  brewery: IBrewery
}

const Brewery: NextPage<BreweryProps> = ({ brewery }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <MainDetailContainer>
        <BackBtn href='/'>
          Back
        </BackBtn>
        <CardDetailContainer>
          <h4>{brewery.name}</h4>
          <span>Type: <TypeTag>{brewery.brewery_type}</TypeTag></span>
          <span>City: {brewery.city}</span>
          <span>State: {brewery.state}</span>
          <span>Postal code: {brewery.postal_code}</span>
          <span>Country: {brewery.country}</span>
          <span>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
              {brewery.website_url}
            </a>
          </span>
          <span>Phone: {brewery.phone}</span>
          <span>Open in map: {brewery.latitude} {brewery.longitude}</span>
        </CardDetailContainer>
        <div style={{ width: '100%', height: '400px' }}>
          <MapComponent latitude={brewery.latitude} longitude={brewery.longitude} />
        </div>
      </MainDetailContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<BreweryProps> = async ({ params }) => {
  const id = params?.id as string
  const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
  const brewery = await res.json()

  return { props: { brewery }}
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default Brewery