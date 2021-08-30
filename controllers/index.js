const express = require('express')
const tweets = require('./v1/tweets')

const router = express.Router()

router.use('/v1/tweets', tweets)

module.exports = router
