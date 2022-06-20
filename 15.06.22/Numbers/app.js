const express = require('express');

const numbers = [1,2,3,4,5,6];
const app = express();

// parse request body as JSON
app.use(express.json())

// GET
app.get('/numbers', (req, res) => {
  res.send(`numbers: ${numbers}`)
})

// DELETE
app.delete('/numbers/:num', (req, res) => {
  const { num } = req.params;
  const numIndex = numbers.findIndex(number => number === +num);
  if (numIndex !== -1) {
    numbers.splice(numIndex, 1);
    return res.send(`The number ${num} is deleted from the array | numbers: ${numbers}`)
  }
  else {
    return res.send(`The Number ${num} does not exist | numbers: ${numbers}`)
  }
})

// POST
app.post('/numbers', (req, res) => {
  const { num } = req.body;
  const duplicatedNum = numbers.find(number => number === +num);
  if (duplicatedNum) {
    return res.send(`The number ${num} already exists | numbers: ${numbers} `); 
  }
  else {
    numbers.push(+num)
    return res.send(`The number ${num} is added to the array | numbers: ${numbers} `)
  }
})

// PUT
app.put('/numbers/:num', (req, res) => {
  const { num } = req.params;
  const { newNum } = req.body;
  const numIndex = numbers.findIndex(number => number === +num);
  if (numIndex !== -1) {
    numbers[numIndex] = newNum;
    return res.send(`Number ${num} has changed to number ${newNum} | numbers: ${numbers}`)
  }
  else {
    return res.send(`The Number ${num} does not exist | numbers: ${numbers}`)
  }
})

app.listen(3000, () => {
  console.log('Server Up on port 3000')
})