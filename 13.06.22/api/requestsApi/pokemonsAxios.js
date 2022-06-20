const axiox = require('axios');


const getPokemons = async () => {
  try {
    const response = await axiox.get('https://pokeapi.co/api/v2/pokemon/');
    const data = response.data;
    const pokemons = data.results
    return pokemons;
    
  } catch (err) {
    console.error(err);
  }
}

module.exports = getPokemons;