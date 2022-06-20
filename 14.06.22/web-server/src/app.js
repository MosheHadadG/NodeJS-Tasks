const express = require('express');
const path = require('path')


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>');
// })

// app.get('/help', (req, res) => {
//   res.send({
//     name: 'Moshe',
//     lastName: 'Hadad'
//   })
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>')
// })

app.get('/weather', (req, res) => {
  res.send([{ city: "Ramla", temp: 22}, { city: "Ashkelon", temp: 27}])
})
app.listen(3000, () => {
  console.log('server is up on port 3000');
} )