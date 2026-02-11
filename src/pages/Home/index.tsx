import Hero from '../../components/Hero'
import RestaurantesList from '../../components/RestaurantesList'
import Restaurante from '../../models/Restaurante'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'

const lista: Restaurante[] = [
  {
    imagem: sushi,
    nome: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da Semana', 'Japonesa'],
    id: 1
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    id: 2
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    id: 3
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    id: 4
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    id: 5
  },
  {
    imagem: massa,
    nome: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana'],
    id: 6
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantesList restaurante={lista} page="home" />
  </>
)

export default Home
