import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  width: 100%;
  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end; /* joga o conteúdo para baixo */
  padding: 32px;

  color: ${cores.branco};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const Titulos = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 150px;
`
export const TipoComida = styled.h2`
  font-size: 32px;
  font-weight: 100;
  margin: 0;
`

export const NomeRestaurante = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
`
