const User = require('../models/user')
const bcrypt = require('bcryptjs')

class SignUpController {
  static createUser(req, res) {
    let hash = bcrypt.hashSync(req.body.password, 10)
    let dataUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash
    })
    dataUser.save()
    .then(result => {
      res.status(200).json({
        message: 'Success create',
        data: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = SignUpController