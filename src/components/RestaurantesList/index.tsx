import { Container, Lista } from './styles'
import Restaurantes from '../Restaurantes'
import Cardapio from '../Cardapio'
import Restaurante from '../../models/Restaurante'
import Comidas from '../../models/Comidas'

export type Props =
  | {
      restaurante: Restaurante[]
      page: 'home'
    }
  | {
      restaurante: Comidas[]
      page: 'cardapio'
    }

const RestaurantesList = ({ restaurante, page }: Props) => {
  return (
    <Container page={page}>
      <div className="container">
        <Lista page={page}>
          {page === 'home' &&
            restaurante.map((item) => (
              <Restaurantes
                key={item.id}
                imagem={item.imagem}
                nome={item.nome}
                descricao={item.descricao}
                info={item.info}
              />
            ))}

          {page === 'cardapio' &&
            restaurante.map((item) => (
              <Cardapio
                key={item.id}
                imagem={item.imagem}
                nome={item.nome}
                descricao={item.descricao}
                info={[]}
              />
            ))}
        </Lista>
      </div>
    </Container>
  )
}

export default RestaurantesList
