import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.cremeClaro};
  width: 100%;
  max-height: 300px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const FooterLinks = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
`

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
`

export const Copyright = styled.p`
  color: ${cores.salmao};
  max-width: 480px;
  font-size: 10px;
  text-align: center;
`
