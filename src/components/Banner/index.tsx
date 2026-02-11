import imgBanner from '../../assets/images/massa.png'
import { BannerContainer, NomeRestaurante, TipoComida, Titulos } from './styles'

const Banner = () => (
  <BannerContainer style={{ backgroundImage: `url(${imgBanner})` }}>
    <Titulos>
      <TipoComida>Italiana</TipoComida>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </Titulos>
  </BannerContainer>
)

export default Banner
