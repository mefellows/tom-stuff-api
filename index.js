const express = require('express')
const app = express()

// Setup DB connection
const pgp = require('pg-promise')();
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'password'
};
const db = pgp(connection);

app.get('/todos', (req, res) => {
  // Select all tasks from db and return as JSON
  return db.any('SELECT * FROM tasks')
    .then((data) => {
      return res.status(200).send(data)
    })
    .catch((error) => {
      return res.status(500)
    });
})

app.get('/todos/:id', (req, res) => {
  const id = req.params['id'];

  // Select task from db where id = 1 and return as JSON
  return db.any('SELECT * FROM tasks WHERE id = $1', [parseInt(id)])
    .then((data) => {
      return res.status(200).send(data)
    })
    .catch((error) => {
      return res.status(404)
    });
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