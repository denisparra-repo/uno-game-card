const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const {getCards} = require("./card.utils")
let cards = getCards();

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/init-cards', (req, res) => {
  let result = [];
  result.push(cards())
  result.push(cards())
  result.push(cards())
  result.push(cards())
  result.push(cards())
  res.send(result)
})

app.get('/new-card', (req, res) => {
  res.send(cards())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})