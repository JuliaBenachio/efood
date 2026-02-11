import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import {
  Copyright,
  CopyrightContainer,
  FooterContainer,
  FooterLinks
} from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src={logo} alt="" />
      <FooterLinks>
        <li>
          <img src={instagram} alt="" />
        </li>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={twitter} alt="" />
        </li>
      </FooterLinks>
      <CopyrightContainer>
        <Copyright>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Copyright>
      </CopyrightContainer>
    </div>
  </FooterContainer>
)

export default Footer
