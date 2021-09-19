export default (name) => {
  const Player = document.createElement('div')
  Player.classList.add('player')

  const PlayerName = document.createElement('p')
  PlayerName.classList.add('player-name')
  PlayerName.innerText = name

  const PlayerPokemons = document.createElement('div')
  PlayerPokemons.classList.add('player-pokemons')

  Player.append(PlayerName, PlayerPokemons)

  for (let i = 0; i < 6; i++) {
    const PlayerPokemon = document.createElement('div')
    PlayerPokemons.append(PlayerPokemon)
    PlayerPokemon.classList.add('player-pokemon')
  }

  return Player
}