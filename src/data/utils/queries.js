export const getPokemons = `query pokemons {
  pokemons(limit: 151, offset: 0) {
    results {
      name
      artwork
    }
  }
}`;

export const getPokemon = (name) => `query pokemon {
  pokemon(name: "${name}") {
    name
    types {
      type {
        name
      }
    }
  }
}`;