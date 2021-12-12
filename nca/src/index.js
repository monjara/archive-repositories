const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const express = require('express')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, '../public')

app.use(express.static(publicDirectory))

let count = 0
io.on('connection', (socket) => {
  console.log('New socket connection')
  socket.emit('countUpdated', count)

  socket.on('increment', () => {
    count++
    io.emit('countUpdated', count)
  })
})

server.listen(port, () => {
  console.log(`Server listens on port ${port}`)
})
