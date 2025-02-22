export interface IBrewery {
  id: string
  name: string
  brewery_type: string
  address_1: string
  address_2: any
  address_3: any
  city: string
  state_province: string
  postal_code: string
  country: string
  longitude: string
  latitude: string
  phone: string
  website_url: string
  state: string
  street: string
}

export interface Props {
  data: IBrewery[]
  totalBreweries: string
}