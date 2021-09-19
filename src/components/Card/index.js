import { pokemonTypesBase } from '../../data/constants/pokemon-types.js'

/** 
  * @pokemon Any pokemon
*/

export default (pokemon) => {
  const untapCard = (card, img, pokemon, text) => {
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

    text.innerText = pokemon.name

    img.classList.remove('d-none')
    text.classList.remove('d-none')
  }

  const tapCard = (card, img, text) => {
    card.classList.remove('untappedCard')
    card.classList.add('tappedCard')
    img.classList.add('d-none')
    text.classList.add('d-none')
  }

  const Card = document.createElement('div')
  const img = document.createElement('img')
  const text = document.createElement('div')

  Card.appendChild(img)
  Card.appendChild(text)

  Card.classList.add('tappedCard')

  Card?.addEventListener('click', () => {
    if (Card.classList.contains('tappedCard')) {
      untapCard(Card, img, pokemon, text)
    } else {
      tapCard(Card, img, text)
    }
  })

  return Card
}