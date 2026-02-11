import { Link } from 'react-router-dom'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import { HeaderContainer, NavBar } from './styles'

const Header = () => (
  <HeaderContainer>
    <div style={{ backgroundImage: `url(${Fundo})` }}>
      <NavBar>
        <div>
          <div>Restaurantes</div>
        </div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <div>0 produtos no carrinho</div>
        </div>
      </NavBar>
    </div>
  </HeaderContainer>
)

export default Header
