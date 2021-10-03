import { getPokemons, getPokemonsByName } from './src/data/repositories/pokemon.repository.js'
import { getLocalStorage } from './src/utils/local-storage.js'
import Header from './src/components/Header/index.js'
import CardList from './src/components/CardList/index.js'
import App from './app.js'

if (!getLocalStorage('@pokemons')) {
  const pokemons = await getPokemons()
  const pokemonsByName = await getPokemonsByName(pokemons)
  App().append(Header(), CardList(pokemonsByName))
} else {
  const storagePokemons = JSON.parse(getLocalStorage('@pokemons'))
  App().append(Header(), CardList(storagePokemons))
}