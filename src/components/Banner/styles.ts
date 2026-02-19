import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  width: 100%;

  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;

  padding: 32px;

  color: ${cores.branco};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 240px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
    padding: 16px;
  }
`

export const Titulos = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 150px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 100px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 16px;
  }
`

export const TipoComida = styled.h2`
  font-size: 32px;
  font-weight: 100;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const NomeRestaurante = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }
`
