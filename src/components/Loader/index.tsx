import { MoonLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <MoonLoader color={cores.salmao} />
  </Container>
)

export default Loader
