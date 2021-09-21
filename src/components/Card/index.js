import { pokemonTypesBase } from '../../data/constants/pokemon-types.js'

let clickTimes = 0
let clickedCards = []
let imgsOfclickedCards = []
let pokemonOfclickedCards = []

let playerOnePoints = -1
let playerTwoPoints = -1

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

const checkPlayersTurn = () => {
  if (document.querySelector(".player-1").classList.contains('turn')) {
    document.querySelector(".player-1").classList.remove('turn')
    document.querySelector(".player-2").classList.add('turn')
  } else if (document.querySelector(".player-2").classList.contains('turn')) {
    document.querySelector(".player-2").classList.remove('turn')
    document.querySelector(".player-1").classList.add('turn')
  }
}

const setPlayerPoints = () => {
  if (document.querySelector('.player-1').classList.contains('turn')) {
    playerOnePoints += 1
    document.querySelector('.player-1 .player-pokemons').children.item(playerOnePoints).classList.add('captured')
  } else if (document.querySelector('.player-2').classList.contains('turn')) {
    playerTwoPoints += 1
    document.querySelector('.player-2 .player-pokemons').children.item(playerTwoPoints).classList.add('captured')
  }
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
      // const oldTimer = document.querySelector('.timer')
      if (clickTimes < 2) {
        untapCard(Card, img, pokemon)
        clickTimes += 1
        clickedCards.push(Card)
        imgsOfclickedCards.push(img)
        pokemonOfclickedCards.push(pokemon)
        // oldTimer?.replaceWith(Timer('start'))
      }
    }
    if (Card.classList.contains('untappedCard')) {
      // const oldTimer = document.querySelector('.timer')
      if (clickTimes === 2) {
        // oldTimer?.replaceWith(Timer('stop'))
        if (pokemonOfclickedCards[0].name !== pokemonOfclickedCards[1].name) {
          setTimeout(function () {
            tapCard(clickedCards[0], imgsOfclickedCards[0], pokemonOfclickedCards[0])
            tapCard(clickedCards[1], imgsOfclickedCards[1], pokemonOfclickedCards[1])
            clearTapCardConstants()
            checkPlayersTurn()
          }, 1000)
        } else {
          clearTapCardConstants()
          setPlayerPoints()
          checkPlayersTurn()
        }
      }
    }
  })

  return Card
}