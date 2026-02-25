import { useParams } from 'react-router-dom'
import { skipToken } from '@reduxjs/toolkit/query'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'
import Loader from '../../components/Loader'

import { useGetCardapioQuery } from '../../services/api'

const Restaurante = () => {
  const { id } = useParams()

  const { data: restaurante, isLoading: isLoadingRestaurante } =
    useGetCardapioQuery(id ?? skipToken)

  if (isLoadingRestaurante || !restaurante) return <Loader />

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <RestaurantesList
        restaurante={restaurante.cardapio}
        page="cardapio"
        isLoading={isLoadingRestaurante}
      />
    </>
  )
}

export default Restaurante
