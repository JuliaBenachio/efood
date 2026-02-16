import Banner from '../../components/Banner'
import Header from '../../components/Header'
import RestaurantesList from '../../components/RestaurantesList'

import { useParams } from 'react-router-dom'
import { Restaurantes } from '../Home'
import { useEffect, useState } from 'react'

const Restaurante = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />

      <RestaurantesList
        restaurante={restaurante?.cardapio || []}
        page="cardapio"
      />
    </>
  )
}

export default Restaurante
