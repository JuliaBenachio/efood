import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'

import { useParams } from 'react-router-dom'
import { skipToken } from '@reduxjs/toolkit/query'

import { useGetCardapioQuery } from '../../services/api'

const Restaurante = () => {
  const { id } = useParams()

  const { data: restaurante, isLoading } = useGetCardapioQuery(id ?? skipToken)

  if (isLoading || !restaurante) return <div>Carregando...</div>

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <RestaurantesList restaurante={restaurante.cardapio} page="cardapio" />
    </>
  )
}

export default Restaurante
