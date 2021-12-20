'use strict';
const express = require('express');

let todos = [
  { id: 1, title: 'ネーム', completed: false },
  { id: 2, title: '下書き', completed: true },
];

const app = express();

app.use(express.json());

app.get('/api/todos', (req, res) => {
  console.log(req.query);
  if (!req.query.completed) {
    return res.json(todos);
  }
  const completed = req.query.completed === 'true';
  res.json(todos.filter((todo) => todo.completed === completed));
});

let sseSenders = [];
let sseId = 1;
app.get('/api/todos/events', (req, res) => {
  req.socket.setTimeout(0);
  res.set({
    'Content-Type': 'text/event-stream',
  });
  const send = (id, data) => res.write(`id: ${id}\ndata: ${data}\n\n`);
  sseSenders.push(send);
  send(sseId, JSON.stringify(todos));
  req.on('close', () => {
    res.end();
    sseSenders = sseSenders.filter((_send) => _send !== send);
  });
});

function onUpdateTodos() {
  sseId += 1;
  const data = JSON.stringify(todos);
  sseSenders.forEach(send => send(sseId, data));
}

let id = 2;
app.post('/api/todos', (req, res, next) => {
  const { title } = req.body;
  if (typeof title != 'string' || !title) {
    const err = new Error('title is required');
    err.statusCode = 400;
    return next(err);
  }
  const todo = { id: id + 1, title: title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
  onUpdateTodos();
});

app.use('/api/todos/:id(\\d+)', (req, next) => {
  const id = Number(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    const error = new Error('todo not found');
    error.statusCode = 404;
    return next(error);
  }
  req.todo = todo;
  next();
});

app
  .route('/api/todos/:id(\\d+)/completed')
  .put((req, res) => {
    req.todo.completed = true;
    res.json(req.todo);
  })
  .delete((req, res) => {
    req.todo.completed = false;
    res.json(req.todo);
  });

app.delete('/api/todos/:id(\\d+)', (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.todo.id);
  res.status(204).end();
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ error: err.message });
});

app.listen(3000);

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });

nextApp.prepare().then(
  () => app.get('*', nextApp.getRequestHandler()),
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
