import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: ' #E66767',
  branco: '#fff',
  creme: '#FFF8F2;',
  cremeClaro: '#FFEBD9;'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;

  }

  body {
  background-color: ${cores.creme};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
    `

export const BotaoContainer = styled.button`
  padding: 4px 6px;
  margin: 6px;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`

export const Paragrafo = styled.p`
  margin: 16px 8px;
  font-size: 14px;
`
