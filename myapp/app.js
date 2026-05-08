const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res) => {   
  res.send('JANANI R S')
})

app.get('/regno', (req, res) => {   
  res.send('23AI024')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//mongodb+srv://janani_rs:mail2janani@@fsd-day1.ay1jm4n.mongodb.net/