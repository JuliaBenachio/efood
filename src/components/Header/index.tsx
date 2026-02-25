import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import { BotaoCarrinho, HeaderContainer, NavBar, Voltar } from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div style={{ backgroundImage: `url(${Fundo})` }}>
        <NavBar>
          <div>
            <Voltar to="/">Restaurantes</Voltar>
          </div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <BotaoCarrinho onClick={openCart}>
            <div>{items.length} produtos no carrinho</div>
          </BotaoCarrinho>
        </NavBar>
      </div>
    </HeaderContainer>
  )
}

export default Header
