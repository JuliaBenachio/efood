import { Container, Lista } from './styles'
import RestaurantesCard from '../Restaurantes'
import Cardapio from '../Cardapio'

import Loader from '../Loader'

export type Props =
  | {
      restaurante: Restaurantes[]
      page: 'home'
      isLoading: boolean
    }
  | {
      restaurante: CardapioItem[]
      page: 'cardapio'
      isLoading: boolean
    }

const RestaurantesList = ({ restaurante, page, isLoading }: Props) => {
  const getRestauranteTag = (restaurante: Restaurantes) => {
    const tags: string[] = []

    if (restaurante.destacado) {
      tags.push('Destaque')
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container page={page}>
      <div className="container">
        <Lista page={page}>
          {page === 'home' &&
            restaurante.map((item) => (
              <RestaurantesCard
                key={item.id}
                id={item.id}
                imagem={item.capa}
                nome={item.titulo}
                descricao={item.descricao}
                info={getRestauranteTag(item)}
                destacado={item.destacado}
                avaliacao={item.avaliacao}
              />
            ))}

          {page === 'cardapio' &&
            restaurante.map((item) => (
              <Cardapio
                key={item.id}
                imagem={item.foto}
                nome={item.nome}
                descricao={item.descricao}
                info={[]}
                porcao={item.porcao}
                preco={item.preco}
                prato={item}
              />
            ))}
        </Lista>
      </div>
    </Container>
  )
}

export default RestaurantesList
