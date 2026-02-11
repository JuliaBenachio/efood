import Logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import { Imagem, Titulo } from './styles'

const Hero = () => (
  <div>
    <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
      <div className="container">
        <img src={Logo} alt="" />
        <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
      </div>
    </Imagem>
  </div>
)

export default Hero
