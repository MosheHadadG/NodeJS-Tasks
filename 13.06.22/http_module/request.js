const https = require('https');


https.get('https://pokeapi.co/api/v2/pokemon/', (response) => {
  let data = '';
  response.on('data', (chunc) => {
    data += chunc;
  });
  response.on('end', () => {
    const dataObj = JSON.parse(data)
    console.log(dataObj.results);
  });
})
.on('error', (error) => {
  console.log(error)
})
