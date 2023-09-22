import Card from "@/components/Card"
import { Props } from "@/types/@types"
import { GetStaticProps, NextPage } from "next"
import { HomeContainer, ListContainer, NextPageContainer, TagLinkPagination } from "./style"
import Header from "@/components/Header"
import { useRouter } from 'next/router'
import Link from "next/link"

const HomeBrewery: NextPage<Props> = ({ data, totalBreweries }) => {
  const router = useRouter()
  const page = router.query.page ?? '1'

  const itemsPerPage = 8
  const startIndex = (parseInt(page) - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const breweriesToDisplay = data.slice(startIndex, endIndex)

  const totalPages = Math.ceil(totalBreweries / itemsPerPage)

  return (
    <>
      <Header />
      <HomeContainer>
        <ListContainer>
          {breweriesToDisplay.map((breweryItem) => (
            <Card breweryItem={breweryItem} key={breweryItem.id} />
          ))}
        </ListContainer>
        <NextPageContainer className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <TagLinkPagination href={`/?page=${index + 1}`} key={index}>
              <span className={page === `${index + 1}` ? 'active' : ''}>
                {index + 1}
              </span>
            </TagLinkPagination>
          ))}
        </NextPageContainer>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://api.openbrewerydb.org/v1/breweries')
  const data = await res.json()
  const totalBreweries = data.length

  return {
    props: {
      data,
      totalBreweries: totalBreweries.toString()
    }
  }
}

export default HomeBrewery