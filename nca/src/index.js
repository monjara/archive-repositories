const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const express = require('express')
const { createSocket } = require('dgram')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

io.on('connection', (socket) => {
  socket.emit('message', 'welcome')

  socket.on('sendMessage', (message) => {
    io.emit('message', message)
  })
})

server.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})
