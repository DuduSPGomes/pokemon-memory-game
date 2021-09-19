import { pokemonTypesBase } from '../../data/constants/pokemon-types.js'

/** 
  * @pokemon Any pokemon
*/

export default (pokemon) => {
  const untapCard = (card, img, pokemon) => {
    card.classList.remove('tappedCard')
    card.classList.add('untappedCard')
    img.src = pokemon.artwork
    img.classList.add('artwork')

    const pokemonType = pokemon?.types[0]?.type?.name

    pokemonTypesBase.forEach((ptb) => {
      if (ptb === pokemonType) {
        card.classList.add(`bg-color-${pokemon?.types[0]?.type?.name}`)
      }
    })

    img.classList.remove('d-none')
  }

  const tapCard = (card, img) => {
    card.classList.remove('untappedCard')
    card.classList.add('tappedCard')
    img.classList.add('d-none')

    const pokemonType = pokemon?.types[0]?.type?.name

    pokemonTypesBase.forEach((ptb) => {
      if (ptb === pokemonType) {
        card.classList.remove(`bg-color-${pokemon?.types[0]?.type?.name}`)
      }
    })
  }

  const Card = document.createElement('div')
  const img = document.createElement('img')

  Card.appendChild(img)

  Card.classList.add('card', 'tappedCard')

  Card?.addEventListener('click', () => {
    if (Card.classList.contains('tappedCard')) {
      untapCard(Card, img, pokemon)
    } else {
      tapCard(Card, img)
    }
  })

  return Card
}