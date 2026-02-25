import { BotaoContainer, BotaoAdicionar } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Botao = ({ type, title, to, onClick, children, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <BotaoAdicionar
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
      >
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
