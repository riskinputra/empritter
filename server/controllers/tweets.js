const Tweet = require('../models/tweet')


class TweetController {
  static getAllTweet(req, res) {
    Tweet.find()
    .then(result => {
      res.status(200).json({
        message: 'Tweets All',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static createPost(req, res) {
    console.log(res.body)
  }
}

module.exports = TweetController