import styled from 'styled-components'
import { BotaoContainer, cores, Paragrafo, breakpoints } from '../../styles'

export const Card = styled.div`
  position: relative;
  background-color: ${cores.salmao};

  width: 100%;
  max-width: 320px;

  color: ${cores.cremeClaro};
  overflow: hidden;

  padding-bottom: 48px;

  margin: 0 auto;
`

export const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
`

export const Foto = styled.img`
  width: 95%;
  max-height: 168px;
  object-fit: cover;
`

export const Titulo = styled.h2`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const Sobre = styled(Paragrafo)`
  margin: 8px;
  font-size: 14px;
`

export const BotaoAdicionar = styled(BotaoContainer)`
  color: ${cores.salmao};
  background-color: ${cores.cremeClaro};
  margin-top: 8px;
  width: 96%;
`

export const Modal = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  display: none;
  align-items: center;
  justify-content: center;

  z-index: 5;

  &.visible {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  max-width: 1024px;
  width: 90%;

  background-color: ${cores.salmao};
  color: ${cores.cremeClaro};

  padding: 32px;

  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }

  header {
    position: absolute;
    top: 16px;
    right: 16px;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: auto;
      max-width: 300px;
    }
  }
`

export const ModalInfos = styled.div`
  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    margin: 8px 0;
  }

  button {
    margin-top: 16px;
    padding: 4px 8px;

    background-color: ${cores.cremeClaro};
    color: ${cores.salmao};

    border: none;
    cursor: pointer;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
`
