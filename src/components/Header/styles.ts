import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 170px;

  font-size: 18px;
  color: ${cores.salmao};
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }
`

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  align-items: center;
  justify-items: center;

  height: 180px;

  padding: 60px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    gap: 32px;

    height: auto;

    padding: 16px;
  }
`

export const Voltar = styled(Link)`
  text-decoration: none;
  color: inherit;

  @media (max-width: ${breakpoints.tablet}) {
    order: 1;
  }
`

export const BotaoCarrinho = styled.a`
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    order: 3;
  }
`
