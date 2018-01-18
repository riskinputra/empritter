const Tweet = require('../models/tweet')
const jwt = require('jsonwebtoken')


class TweetController {
  static getAllTweet(req, res) {
    Tweet.find()
    .populate('userId')
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
    const userId = jwt.verify(req.headers.token, process.env.SECRET_KEY).id
    console.log(req.body)
    let newPost = req.body.post.split(' ')
    console.log(newPost)
    let filter = newPost.filter(newFilter=> {
      return newFilter[0] == '#' 
    })
    let newDataPost = new Tweet({
      userId: userId,
      post: req.body.post,
      hastag: filter
    })
    newDataPost.save()
    .then(result => {
      res.status(200).json({
        message: 'Success Tweets',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static removePost(req, res) {
    const userId = jwt.verify(req.headers.token, process.env.SECRET_KEY).id
    Tweet.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json({
        message: 'Success to delete',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = TweetController