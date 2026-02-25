import Hero from '../../components/Hero'
import RestaurantesList from '../../components/RestaurantesList'

import { useGetRestauranteQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading: isLoadingRestaurantes } =
    useGetRestauranteQuery()

  return (
    <>
      <Hero />
      <RestaurantesList
        restaurante={restaurantes || []}
        page="home"
        isLoading={isLoadingRestaurantes}
      />
    </>
  )
}

export default Home
