const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({message: "Hello from admin! admin"})
})

module.exports = app;
