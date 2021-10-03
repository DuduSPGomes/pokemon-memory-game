import Card from '../Card/index.js'
import { duplicate } from '../../utils/duplicate.js'
import { shuffle } from '../../utils/shuffle.js'

/**
 * @pokemons Array of the pokemons
 */

export default (pokemons) => {
  const CardList = document.createElement('ul')

  CardList.classList.add('card-list')

  const duplicatedPokemonList = duplicate(pokemons)
  const shuffledPokemonList = shuffle(duplicatedPokemonList)

  shuffledPokemonList?.map((pokemon) => {
    CardList.append(Card(pokemon))
  })

  return CardList
}