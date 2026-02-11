import styled from 'styled-components'
import { BotaoContainer, cores, Paragrafo } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.salmao};
  max-width: 320px;
  max-height: 340px;
  color: ${cores.cremeClaro};
  overflow: hidden;
  padding-bottom: 48px;
`

export const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`

export const Foto = styled.img`
  width: 95%;
  max-height: 168px;
`

export const Titulo = styled.h2`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const Sobre = styled(Paragrafo)`
  margin: 8px;
`

export const BotaoAdicionar = styled(BotaoContainer)`
  color: ${cores.salmao};
  background-color: ${cores.cremeClaro};
  margin-top: 8px;
  width: 96%;
`
