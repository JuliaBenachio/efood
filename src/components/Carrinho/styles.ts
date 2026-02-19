import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import lixo from '../../assets/images/lixeira-de-reciclagem.png'
import { BotaoAdicionar } from '../Button/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CarrinhoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const ListaItens = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 4px;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1;
  padding: 32px 8px;
  width: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  ${BotaoAdicionar} {
    position: static;
    transform: none;
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 24px 16px;
  }
`

export const Precos = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.cremeClaro};
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
`

export const CardContainer = styled.div`
  background-color: ${cores.cremeClaro};
  display: flex;
  position: relative;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    margin: 8px 8px 12px 8px;
    object-fit: cover;
  }
`

export const CardInfos = styled.div`
  color: ${cores.salmao};
  display: block;
  margin: 8px 0;

  h3 {
    margin-bottom: 16px;
  }
`

export const BotaoRemover = styled.button`
  background-image: url(${lixo});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 8px;
  right: 8px;

  cursor: pointer;
`
