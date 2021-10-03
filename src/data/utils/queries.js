export const getPokemonsQuery = `query pokemons {
  pokemons(limit: 12, offset: 0) {
    results {
      name
      artwork
    }
  }
}`;

export const getPokemonByNameQuery = (name) => `query pokemon {
  pokemon(name: "${name}") {
    name
    types {
      type {
        name
      }
    }
  }
}`;