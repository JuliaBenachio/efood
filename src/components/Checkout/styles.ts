import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: ${cores.cremeClaro};
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  width: 100%;
  flex: 1;

  h1 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    margin: 8px 0;
  }

  input {
    background-color: ${cores.cremeClaro};
    border: none;
    height: 32px;
    padding: 8px;

    &.error {
      border: 2px solid red;
    }
  }
`
export const ButtonContainer = styled.div`
  display: block;

  button {
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Row = styled.div`
  display: flex;
  flex: auto;
  justify-content: space-between;
  margin-top: 8px;
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  display: block;
  max-width: ${(props) => props.maxWidth || 'auto'};

  input {
    width: 100%;
    margin-top: 8px;
  }
`

export const ConclusaoContainer = styled.div`
  font-weight: 400;
  font-size: 14px;

  p {
    margin-bottom: 24px;
  }
`
