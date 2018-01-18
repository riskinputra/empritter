const express = require('express');
const router = express.Router()
const TweetController = require('../controllers/tweets')

module.exports = router
  .get('/', TweetController.getAllTweet)
  .post('/', TweetController.createPost)