const express = require('express')
const admin = require('./admin/route.js')
const PORT = process.env.PORT || 3001
const ADMIN_URL = process.env.ADMIN_URL || 'admin'
const app = express()

app.use(`/${ADMIN_URL}`, admin)

app.get('/api', (req, res) => {
  res.json({message: "Hello from server!"})
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
