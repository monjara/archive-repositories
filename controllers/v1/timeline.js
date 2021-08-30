const express = require('express')
const { Tweet } = require('../../models/tweet')
const router = express.Router()

router.post('/', (req, res, next) => {
  ;(async () => {
    const userIds = req.body
    const tweets = await Tweet.find({ userId: { $in: userIds } }, null, {
      sort: { createdAt: -1 },
    }).exec()
    res.status(200).json(tweets)
  })().catch(next)
})

module.exports = router
