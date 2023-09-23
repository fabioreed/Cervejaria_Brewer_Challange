import React from 'react'
import { HeaderContainer, TitleHeaderContainer } from './style'

const Header = () => {
  
  return (
    <HeaderContainer>
      <img src="https://i.pinimg.com/originals/ef/e8/a2/efe8a2f77ca31ebce5067cf1447c3810.png" alt="Brewery Logo"/>
      <TitleHeaderContainer>
        <h1>Breweries</h1>
        <p>A breweries list by Open Brewery DB</p>
      </TitleHeaderContainer>
    </HeaderContainer>
  )
}

export default Header