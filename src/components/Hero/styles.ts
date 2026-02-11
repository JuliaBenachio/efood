import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  color: ${cores.salmao};

  background-repeat: no-repeat;
  background-size: cover;

  .container {
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Titulo = styled.h1`
  padding-top: 140px;
  max-width: 540px;
  font-size: 36px;
  font-weight: 900;
`
