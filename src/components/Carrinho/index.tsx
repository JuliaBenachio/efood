import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../Checkout'
import Button from '../Button'

import {
  BotaoRemover,
  CardContainer,
  CardInfos,
  CarrinhoContainer,
  FecharContainer,
  ListaItens,
  Overlay,
  Precos,
  Sidebar
} from './styles'
import fechar from '../../assets/images/fechar.png'
import { close, remove, setStep } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { getTotalPrice, formataPreco } from '../../utils'

const Carrinho = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CarrinhoContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <FecharContainer>
          <header>
            <img src={fechar} alt="Fechar carrinho" onClick={closeCart} />
          </header>
        </FecharContainer>
        {step === 'cart' && (
          <>
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
              Valor Total <span>{formataPreco(getTotalPrice(items))}</span>
            </Precos>
            <Button
              title="Clique aqui para continuar a compra"
              type="button"
              disabled={items.length === 0}
              onClick={() => dispatch(setStep('address'))}
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {step !== 'cart' && <Checkout />}
      </Sidebar>
    </CarrinhoContainer>
  )
}

export default Carrinho
