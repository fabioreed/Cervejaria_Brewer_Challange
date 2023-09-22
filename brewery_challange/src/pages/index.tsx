import Card from "@/components/Card"
import { Props } from "@/types/@types"
import { GetStaticProps, NextPage } from "next"
import { ListContainer } from "./style"
import Header from "@/components/Header"

const HomeBrewery: NextPage<Props> = ({ data }) => {

  return (
    <>
      <Header />
      <ListContainer>
        {data.map((breweryItem) => (
          <Card breweryItem={breweryItem} />
        ))}
      </ListContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://api.openbrewerydb.org/v1/breweries')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default HomeBrewery