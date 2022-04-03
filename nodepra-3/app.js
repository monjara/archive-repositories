'use strict'
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const dataStorage = require(`./${process.env.npm_lifecycle_event}`)

const app = express()

app.use(express.json())

app.get('/api/todos', (req, res, next) => {
  if (!req.query.completed) {
    return dataStorage.fetchAll().then(todos => res.json(todos), next)
  }
  const completed = req.query.completed === 'true'
  dataStorage.fetchByCompleted(completed).then(todos => res.json(todos), next)
})

app.post('/api/todos', (req, res, next) => {
  const { title } = req.body
  if (typeof title !== 'string' || !title) {
    const err = new Error('title is required')
    err.statusCode(400)
    return next(err)
  }
  const todo = { id: uuidv4(), title, completed: false }
  dataStorage.create(todo).then(() => res.status(201).json(todo), next)
})
