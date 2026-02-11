import styled from 'styled-components'

type LayoutProps = {
  page: 'home' | 'cardapio'
}

export const Container = styled.div<LayoutProps>`
  padding: 16px 8px;
`

export const Lista = styled.ul<LayoutProps>`
  display: grid;

  grid-template-columns: ${({ page }) =>
    page === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};

  column-gap: ${({ page }) => (page === 'home' ? '80px' : '32px')};

  margin: 80px 0;
  justify-items: center;
  row-gap: 48px;
`
