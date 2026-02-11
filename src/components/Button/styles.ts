import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const BotaoAdicionar = styled.button`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);

  width: 95%;

  color: ${cores.salmao};
  background-color: ${cores.cremeClaro};

  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;

  border: none;
  cursor: pointer;
`
export const BotaoContainer = styled(Link)`
  position: absolute;
  bottom: 8px;
  left: 8px;

  color: ${cores.cremeClaro};
  background-color: ${cores.salmao};

  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;

  text-decoration: none;
  border: none;
  cursor: pointer;
`
