import fetchPokeApi from "../config/fetch.js"
import { getPokemonsQuery, getPokemonByNameQuery } from "../utils/queries.js"
import { addToLocalStorage } from "../../utils/local-storage.js"

export async function getPokemons () {
  return fetchPokeApi(getPokemonsQuery)
    ?.then((res) => res.json())
    ?.then((res) => res.data.pokemons.results)
}

export async function getPokemonsByName (pokemons) {
  const arr = pokemons?.map((pokemon) => {
    return fetchPokeApi(getPokemonByNameQuery(pokemon.name))
      ?.then((res) => res.json())
      ?.then((res) => res.data.pokemon)
  })

  Promise.all(arr).then((res) => {
    res.map((r) => {
      const pokemonsObj = r
      const pokemonName = pokemonsObj?.name
      const pokemonTypes = pokemonsObj?.types
      pokemons.forEach((pokemon) => {
        if (pokemon.name === pokemonName) {
          pokemon.types = pokemonTypes
        }
      })
      addToLocalStorage('@pokemons', pokemons)
    })
  })

  return pokemons
}
