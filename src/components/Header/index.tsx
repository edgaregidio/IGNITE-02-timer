import React from 'react'
import { NavLink } from 'react-router-dom'
import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './styles'

import LogoIgnite from '../../assets/logoignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
