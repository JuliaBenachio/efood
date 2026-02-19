import Hero from '../../components/Hero'
import RestaurantesList from '../../components/RestaurantesList'

import { useEffect, useState } from 'react'
import { useGetRestauranteQuery } from '../../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestauranteQuery()

  return (
    <>
      <Hero />
      <RestaurantesList restaurante={restaurantes || []} page="home" />
    </>
  )
}

export default Home
