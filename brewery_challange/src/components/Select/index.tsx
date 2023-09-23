import React from 'react'

interface Props {
  onStatusChange: (value: string) => void
}

const Select: React.FC<Props> = ({ onStatusChange }) => {

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = (e.target.value)
    onStatusChange(selectedValue)
  }

  return (
    <select onChange={handleStatusChange} >
      <option value="">Filter</option>
      <option value="micro">Micro</option>
      <option value="brewpub">Brewpub</option>
      <option value="contract">Contract</option>
      <option value="regional">Regional</option>
      <option value="proprietor">Proprietor</option>
      <option value="closed">Closed</option>
      <option value="large">Large</option>
    </select>
  )
}

export default Select