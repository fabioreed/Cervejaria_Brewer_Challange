import { IBrewery } from "@/types/@types"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"

interface BreweryProps {
  brewery: IBrewery
}

const Brewery: NextPage<BreweryProps> = ({ brewery }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h2>Brewery Details</h2>
      <span>Type: {brewery.brewery_type}</span>
      <span>Name: {brewery.name}</span>
      <span>City: {brewery.city}</span>
      <span>State: {brewery.state}</span>
      <span>Postal code: {brewery.postal_code}</span>
      <span>Country: {brewery.country}</span>
      <span>Website: {brewery.website_url}</span>
      <span>Phone: {brewery.phone}</span>
      <span>Open in map: {brewery.latitude} {brewery.longitude}</span>
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