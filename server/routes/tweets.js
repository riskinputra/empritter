const express = require('express');
const router = express.Router()
const TweetController = require('../controllers/tweets')
const middleware = require('../middleware/auth')

module.exports = router
  .get('/', TweetController.getAllTweet)
  .post('/', middleware, TweetController.createPost)
  .delete('/:id', middleware, TweetController.removePost)