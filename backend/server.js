const express = require('express')
const users = require('./data/users')
const primaryaccounts = require('./data/primaryaccounts')
const savingsaccounts = require('./data/savingsaccounts')

const app = express()

app.get('/', (req, res) => {
  res.send('API running on port 9009')
})

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find((user) => user._id === req.params.id)
  res.json(user)
})

app.get('/api/primary-accounts', (req, res) => {
  res.json(primaryaccounts)
})

app.get('/api/savings-accounts', (req, res) => {
  res.json(savingsaccounts)
})

app.listen(9009, console.log('Server running on port 9009'))