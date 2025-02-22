import Card from "@/components/Card"
import { Props } from "@/types/@types"
import { GetStaticProps, NextPage } from "next"
import { HomeContainer, ListContainer, NextPageContainer, TagLinkPagination } from "./style"
import Header from "@/components/Header"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import Select from "@/components/Select"
import NoBrewery from "@/components/NoBrewery"

const HomeBrewery: NextPage<Props> = ({ data, totalBreweries }) => {
  const router = useRouter()

  const page = typeof router.query.page === 'string' ? router.query.page : '1'
  const itemsPerPage = 8
  const startIndex = (parseInt(page) - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const totalPages = Math.ceil(parseInt(totalBreweries) / itemsPerPage)

  const [selectedStatus, setSelectedStatus] = useState('') //armazena o status selecionado pelo user

  const [filteredData, setFilteredData] = useState(data) //armazena os dados filtrados

  useEffect(() => {
    const filterData = () => {
      if (selectedStatus === '') {
        setFilteredData(data)
      } else {
        const filtered = data.filter(breweryItem => breweryItem.brewery_type === selectedStatus)
        setFilteredData(filtered)
      }
    }

    filterData()
  }, [selectedStatus, data])

  const handleStatusChange = (selectedValue: string) => {
    setSelectedStatus(selectedValue) // Atualiza o estado local
  }

  const filteredBreweries = selectedStatus
    ? filteredData.filter(breweryItem => breweryItem.brewery_type === selectedStatus)
    : filteredData
  
  const breweriesToDisplay = filteredBreweries.slice(startIndex, endIndex)

  // Quando o usuário altera o status selecionado no<Select>, a função handleStatusChange 
  // é chamada, atualizando selectedStatus, que, por sua vez, aciona o efeito useEffect.
  // Dentro do efeito, filtramos os dados com base no status selecionado e 
  // atualizamos filteredData.A lista renderizada é baseada em filteredData

  return (
    <>
      <Header />
      <HomeContainer>
        <Select onStatusChange={handleStatusChange} />
        <ListContainer>
          {breweriesToDisplay.length === 0 ? (
            <NoBrewery />
          ) : (
            breweriesToDisplay.map((breweryItem) => (
              <Card breweryItem={breweryItem} key={breweryItem.id} />
            ))
          )}
        </ListContainer>
        <NextPageContainer className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageIndex = index + 1
            if (breweriesToDisplay.length > 0 || pageIndex === 1) {
              return (
                <TagLinkPagination href={`/?page=${index + 1}`} key={index}>
                  <span className={page === `${index + 1}` ? 'active' : ''}>
                    {index + 1}
                  </span>
                </TagLinkPagination>
              )
            }

            return null //nao exibe paginas vazias
          })}
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