const express = require('express')
const { Tweet } = require('../../models/tweet')
const router = express.Router()

router.get('/', (req, res, next) => {
  ;(async () => {
    const tweets = await Tweet.find({}, null, {
      sort: { createdAt: -1 },
    }).exec()
    res.status(200).json(tweets)
  })().catch(next)
})

router.get('/:id', (req, res, next) => {
  ;(async () => {
    try {
      const tweet = await Tweet.findById(req.params.id).exec()
      if (tweet) {
        res.status(200).json(tweet)
      } else {
        res.status(404).json({ error: 'Not Found' })
      }
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: 'Bad Request' })
    }
  })().catch(next)
})

router.post('/', (req, res, next) => {
  ;(async () => {
    try {
      const record = new Tweet({
        userId: req.body.userId,
        content: req.body.content,
      })
      const saveRecord = await record.save()
      res.status(200).json(saveRecord)
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: 'Bad Request' })
    }
  })().catch(next)
})

router.delete('/:id', (req, res, next) => {
  ;(async () => {
    try {
      const removeRecord = await Tweet.findByIdAndDelete(
        req.params.userId
      ).exec()
      if (removeRecord) {
        res.status(200).json({})
      } else {
        res.status(404).json({ error: 'Not Found' })
      }
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: 'Bad Request' })
    }
  })().catch(next)
})

module.exports = router
