import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Loader from '../Loader'
import Botao from '../Button'
import {
  Card,
  Titulo,
  Foto,
  ImagemContainer,
  Sobre,
  Modal,
  ModalContainer,
  ModalContent,
  ModalInfos
} from './styles'
import close from '../../assets/images/fechar.png'

import { formataPreco } from '../../utils'
import { add, open } from '../../store/reducers/cart'

type Props = {
  imagem: string
  nome: string
  descricao: string
  info?: string[]
  porcao: string
  preco: number
  prato: CardapioItem
}

const Cardapio = ({ imagem, nome, descricao, porcao, preco, prato }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
    setModalEstaAberto(false)
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 110) {
      return descricao.slice(0, 107) + '...'
    }

    return descricao
  }

  if (!prato || !nome) {
    return <Loader />
  }

  return (
    <>
      <Card>
        <div className="container">
          <ImagemContainer>
            <Foto src={imagem} alt="" />
          </ImagemContainer>
          <Titulo>{nome}</Titulo>
          <Sobre>{getDescricao(descricao)}</Sobre>
          <Botao
            type="button"
            title="Mais detalhes"
            onClick={() => setModalEstaAberto(true)}
          >
            Mais detalhes
          </Botao>
        </div>
      </Card>
      <Modal
        className={modalEstaAberto ? 'visible' : ''}
        onClick={() => setModalEstaAberto(false)}
      >
        <ModalContainer
          className="container"
          onClick={(e) => e.stopPropagation()}
        >
          <header>
            <img
              src={close}
              alt="Fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </header>

          <ModalContent>
            <img src={imagem} alt={nome} />

            <ModalInfos>
              <h1>{nome}</h1>
              <Sobre>{descricao}</Sobre>
              <p>{porcao}</p>
              <button onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(preco)}
              </button>
            </ModalInfos>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
}

export default Cardapio
