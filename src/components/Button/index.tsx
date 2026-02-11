import { BotaoContainer, BotaoAdicionar } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Botao = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <BotaoAdicionar type="button" title={title} onClick={onClick}>
        {children}
      </BotaoAdicionar>
    )
  }

  return (
    <BotaoContainer to={to as string} title={title}>
      {children}
    </BotaoContainer>
  )
}

export default Botao
