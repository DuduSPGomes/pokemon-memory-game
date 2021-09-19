import Card from '../Card/index.js'

/**
 * @pokemons Array of the pokemons
 */

export default (pokemons) => {
  const CardList = document.createElement('ul')

  CardList.classList.add('card-list')

  pokemons?.map((pokemon) => {
    CardList.append(Card(pokemon))
  })

  return CardList
}