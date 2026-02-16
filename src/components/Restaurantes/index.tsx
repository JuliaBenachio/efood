import estrela from '../../assets/images/estrela.png'
import { Avaliacao, Card, Foto, Tags, Titulo, Titulos } from './styles'
import Tag from '../Tag'
import { Paragrafo } from '../../styles'
import Botao from '../Button'

type Props = {
  id: number
  imagem: string
  nome: string
  descricao: string
  info: string[]
  destacado: boolean
  avaliacao: number
}

const RestaurantesCard = ({
  imagem,
  nome,
  descricao,
  info,
  id,
  destacado,
  avaliacao
}: Props) => (
  <Card>
    <Foto style={{ backgroundImage: `url(${imagem})` }}>
      <Tags>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Tags>
    </Foto>
    <Titulos>
      <Titulo>{nome}</Titulo>
      <Avaliacao>
        <Titulo>{avaliacao}</Titulo>
        <img src={estrela} alt="" />
      </Avaliacao>
    </Titulos>
    <Paragrafo>{descricao}</Paragrafo>
    <Botao type="link" to={`/restaurante/${id}`} title="Saiba mais">
      Saiba mais
    </Botao>
  </Card>
)

export default RestaurantesCard
