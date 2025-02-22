import React from 'react'
import { SelectContainer } from './style'

interface Props {
  onStatusChange: (value: string) => void
}

const Select: React.FC<Props> = ({ onStatusChange }) => {

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = (e.target.value)
    onStatusChange(selectedValue)
  }

  return (
    <SelectContainer onChange={handleStatusChange}>
      <option value="">All Breweries</option>
      <option value="micro">Micro</option>
      <option value="brewpub">Brewpub</option>
      <option value="contract">Contract</option>
      <option value="regional">Regional</option>
      <option value="proprietor">Proprietor</option>
      <option value="closed">Closed</option>
      <option value="large">Large</option>
    </SelectContainer>
  )
}

export default Select