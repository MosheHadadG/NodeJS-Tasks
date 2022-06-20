const express = require('express');

const app = express();

app.get('/numbers', (req, res) => {
  res.send(`success using ${req.method}`)
})

app.post('/numbers', (req, res) => {
  res.send(`success using ${req.method}`)
})
app.delete('/numbers', (req, res) => {
  res.send(`success using ${req.method}`)
})
app.put('/numbers', (req, res) => {
  res.send(`success using ${req.method}`)
})

app.listen(3000, () => {
  console.log('Server Up on port 3000')
})