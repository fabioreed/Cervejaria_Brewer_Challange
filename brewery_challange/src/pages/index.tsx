import Card from "@/components/Card"
import { Props } from "@/types/@types"
import { GetStaticProps, NextPage } from "next"
import { ListContainer } from "./style"

const HomeBrewery: NextPage<Props> = ({ data }) => {

  return (
    <div>
      <ListContainer>
        {data.map((breweryItem) => (
          <Card breweryItem={breweryItem} />
        ))}
      </ListContainer>
    </div>
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