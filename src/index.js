'use strict';
const express = require('express');
const app = express();

let todos = [
  { id: 1, title: 'ネーム', completed: false },
  { id: 2, title: '下書き', completed: true },
];

app.get('/api/todos', (req, res) => {
  console.log(req.query);
  if (!req.query.completed) {
    return res.json(todos);
  }
  const completed = req.query.completed === 'true';
  res.json(todos.filter((todo) => todo.completed === completed));
});

app.listen(3000);
