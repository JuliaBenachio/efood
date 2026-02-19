import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.cremeClaro};
  width: 100%;
  padding: 40px 16px;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FooterLinks = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
  }
`

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 40px;
  }
`

export const Copyright = styled.p`
  color: ${cores.salmao};
  max-width: 480px;
  font-size: 10px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`
