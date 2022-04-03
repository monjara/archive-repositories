const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const express = require('express')
const Filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

io.on('connection', (socket) => {
  socket.emit('message', 'welcome')
  socket.broadcast.emit('message', 'new user joined')

  socket.on('sendMessage', (message, callback) => {
    const filter = new Filter()

    if (filter.isProfane(message)) {
      return callback('message is profanity')
    }

    io.emit('message', message)
    callback('Delivered')
  })

  socket.on('sendLocation', (location, callback) => {
    io.emit(
      'message',
      `https://google.com/maps?q=${location.latitude},${location.longitude}`
    )
    callback()
  })

  socket.on('disconnect', () => {
    io.emit('message', 'a user has left')
  })
})

server.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})
