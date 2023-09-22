import Card from "@/components/Card"
import { Props } from "@/types/@types"
import { GetStaticProps, NextPage } from "next"

const HomeBrewery: NextPage<Props> = ({ data }) => {

  return (
    <div>
      <ul>
        {data.map((breweryItem) => (
          <Card breweryItem={breweryItem} />
        ))}
      </ul>
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