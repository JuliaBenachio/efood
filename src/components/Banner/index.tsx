import { BannerContainer, TipoComida, NomeRestaurante, Titulos } from './styles'
import { Restaurantes } from '../../pages/Home'

type Props = {
  restaurante?: Restaurantes
}

const Banner = ({ restaurante }: Props) => {
  if (!restaurante) {
    return null
  }

  return (
    <BannerContainer style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <Titulos>
          <TipoComida>{restaurante.tipo}</TipoComida>
          <NomeRestaurante>{restaurante.titulo}</NomeRestaurante>
        </Titulos>
      </div>
    </BannerContainer>
  )
}

export default Banner
