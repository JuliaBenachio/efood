import Button from '../Button'
import {
  BotaoRemover,
  CardContainer,
  CardInfos,
  CarrinhoContainer,
  ListaItens,
  Overlay,
  Precos,
  Sidebar
} from './styles'

import { close, remove } from '../../store/reducers/cart'
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../RestaurantesList'

const Carrinho = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ListaItens>
          {items.map((item) => (
            <CardContainer key={item.id}>
              <img src={item.foto} alt="" />
              <CardInfos>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </CardInfos>
              <BotaoRemover onClick={() => removeItem(item.id)} />
            </CardContainer>
          ))}
        </ListaItens>
        <Precos>
          Valor Total <span>{formataPreco(getTotalPrice())}</span>
        </Precos>
        <Button title="Clique aqui para continuar a compra" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
