export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco || 0)
  }, 0)
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
