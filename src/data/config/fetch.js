const fetchPokeApi = (query) => fetch('https://graphql-pokeapi.graphcdn.app/', {
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: query
  }),
  method: 'POST',
})

export default fetchPokeApi