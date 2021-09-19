import { getPokemon, getPokemons } from './src/data/utils/queries.js'
import fetchPokeApi from './src/data/config/fetch.js'
import { shuffle } from './src/utils/shuffle.js'
import { duplicate } from './src/utils/duplicate.js'
import { addToLocalStorage, getLocalStorage } from './src/utils/local-storage.js'
import App from './app.js'
import CardList from './src/components/CardList/index.js'
import Header from './src/components/Header/index.js'

if (!getLocalStorage('@pokemons')) {
  fetchPokeApi(getPokemons)
    .then((res) => res.json())
    .then((res) => {
      const dup = duplicate(res.data.pokemons.results)
      const pokemons = shuffle(dup)
      pokemons?.map((pokemon) => {
        fetchPokeApi(getPokemon(pokemon.name))
          .then((res) => res.json())
          .then((res) => {
            const pokemonsObj = res.data.pokemon
            const pokemonName = pokemonsObj.name
            const pokemonTypes = pokemonsObj.types
            pokemons.forEach((pokemon) => {
              if (pokemon.name === pokemonName) {
                pokemon.types = pokemonTypes
              }
            })
            addToLocalStorage('@pokemons', pokemons)
          })
      })
      App().append(Header(), CardList(pokemons))
      console.log('fetch!')
    });
} else {
  const pokemons = JSON.parse(getLocalStorage('@pokemons'))
  App().append(Header(), CardList(pokemons))
  console.log('not fetch!')
}