import { Paragrafo } from '../../styles'
import Botao from '../Button'
import { Card, Titulo, Foto, ImagemContainer, Sobre } from './styles'

type Props = {
  imagem: string
  nome: string
  descricao: string
  info?: string[]
}

const Cardapio = ({ imagem, nome, descricao }: Props) => (
  <Card>
    <div className="container">
      <ImagemContainer>
        <Foto src={imagem} alt="" />
      </ImagemContainer>
      <Titulo>{nome}</Titulo>
      <Sobre>{descricao}</Sobre>
      <Botao type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Botao>
    </div>
  </Card>
)

export default Cardapio
