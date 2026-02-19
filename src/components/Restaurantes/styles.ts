import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.branco};
  width: 100%;
  max-width: 480px;
  max-height: 400px;
  border: 1px solid ${cores.salmao};
  color: ${cores.salmao};
  padding-bottom: 48px;
  margin: 0 auto;
`

export const Foto = styled.section`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    height: 180px;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Titulos = styled.ul`
  padding: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    display: block;
    width: 20px;
    height: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 16px;
      height: 16px;
    }
  }
`
