const request = require('request');

const getPokemonsRequest = async () => {
  try {
    const callback = (error, response, body) => {
      if (error)
        throw new Error('Error');
      // console.log('statusCode:', response && response.statusCode); 
      const data = JSON.parse(body);
      const pokemons = data.results;
      console.log(pokemons)
  }
   request.get('https://pokeapi.co/api/v2/pokemon/', callback); 
  
  } catch (err) {
    console.error(err)
  }
}

module.exports = getPokemonsRequest;
