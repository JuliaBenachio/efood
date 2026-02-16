import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 170px;
  font-size: 18px;
  color: ${cores.salmao};
  font-weight: bold;
`

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  height: 180px;
  padding: 60px;
`

export const Voltar = styled(Link)`
  text-decoration: none;
  color: inherit;
`
