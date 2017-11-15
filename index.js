const express = require('express')
const app = express()

app.get('/todos', (req, res) => {
  res.send(`TODO: list of todos to go here`)
})

app.get('/todos/:id', (req, res) => {
  const id = req.params['id'];
  
  res.send(`TODO: single todo ${id} goes here`)
})

app.post('/todos', (req, res) => {
  res.send(`TODO: create todo goes here`)
})

app.put('/todos/:id', (req, res) => {
  const id = req.params['id'];
  
  res.send(`TODO: update single todo ${id} goes here`)
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params['id'];
  
  res.send(`TODO: update single todo ${id} goes here`)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))