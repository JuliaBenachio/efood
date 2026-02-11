import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'
import Comidas from '../../models/Comidas'

import pizza from '../../assets/images/pizza.png'

const lista: Comidas[] = [
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1
  },
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2
  },
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    imagem: pizza,
    nome: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

const Restaurante = () => (
  <>
    <Header />
    <Banner />
    <RestaurantesList restaurante={lista} page="cardapio" />
  </>
)

export default Restaurante
