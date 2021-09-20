import { pokemonTypesBase } from '../../data/constants/pokemon-types.js'

let clickTimes = 0
let clickedCards = []
let imgsOfclickedCards = []
let pokemonOfclickedCards = []

const untapCard = (card, img, pokemon) => {
  card?.classList?.remove('tappedCard')
  card?.classList?.add('untappedCard')
  img.src = pokemon.artwork
  img?.classList?.add('artwork')

  handlePokemonTypes('add', pokemon, card, pokemonTypesBase)

  img.classList.remove('d-none')
}

const tapCard = (card, img, pokemon) => {
  card?.classList?.remove('untappedCard')
  card?.classList?.add('tappedCard')
  img?.classList?.add('d-none')

  handlePokemonTypes('remove', pokemon, card, pokemonTypesBase)
}

const handlePokemonTypes = (handle, pokemon, card, pokemonTB) => {
  const pokemonType = pokemon?.types[0]?.type?.name

  pokemonTB?.forEach((ptb) => {
    if (ptb === pokemonType && handle === 'add') {
      card?.classList?.add(`bg-color-${pokemon?.types[0]?.type?.name}`)
    }
    if (ptb === pokemonType && handle === 'remove') {
      card?.classList?.remove(`bg-color-${pokemon?.types[0]?.type?.name}`)
    }
  })
}

const clearTapCardConstants = () => {
  clickedCards = []
  imgsOfclickedCards = []
  pokemonOfclickedCards = []
  clickTimes = 0
}


/**
  * Returns a pokemon Card
  * @pokemon Pokemon object
*/
export default (pokemon) => {

  const Card = document.createElement('li')
  const img = document.createElement('img')

  Card.appendChild(img)

  Card.classList.add('card', 'tappedCard')

  Card?.addEventListener('click', (e) => {
    if (Card.classList.contains('tappedCard')) {
      if (clickTimes < 2) {
        console.log(clickTimes)
        untapCard(Card, img, pokemon)
        clickTimes += 1
        clickedCards.push(Card)
        imgsOfclickedCards.push(img)
        pokemonOfclickedCards.push(pokemon)
      }
    }
    if (Card.classList.contains('untappedCard')) {
      if (clickTimes === 2) {
        if (pokemonOfclickedCards[0].name !== pokemonOfclickedCards[1].name) {
          setTimeout(function () {
            tapCard(clickedCards[0], imgsOfclickedCards[0], pokemonOfclickedCards[0])
            tapCard(clickedCards[1], imgsOfclickedCards[1], pokemonOfclickedCards[1])
            clearTapCardConstants()
          }, 3000)
        } else {
          setTimeout(function () {
            clearTapCardConstants()
          }, 3000)
        }
      }
    }
  })

  return Card
}