'use clinet'
import { IBrewery } from '@/types/@types'
import { ReactNode, createContext, useEffect, useState, Dispatch, SetStateAction } from 'react'

type BreweryContextType = {
  brewery: IBrewery[]
  setBrewery: Dispatch<SetStateAction<IBrewery[]>>
}

export const BreweryContext = createContext<BreweryContextType>({
  brewery: [],
  setBrewery: () => {}
})

type BreweryProviderProps = {
  children: ReactNode
}

export const BreweryProvider = ({ children }: BreweryProviderProps) => {
  const [brewery, setBrewery] = useState<IBrewery[]>([])

  useEffect(() => {
    const getBrewery = async () => {
      try {
        const res = await fetch('https://api.openbrewerydb.org/v1/breweries')
        const data = await res.json()

        setBrewery(data)
      } catch (err) {
        console.log(err)
      }
    }

    getBrewery()
  }, [])

  return (
    <BreweryContext.Provider value={{brewery, setBrewery }}>
      {children}
    </BreweryContext.Provider>
  )
}