const express = require('express');
const router = express.Router()
const SigninController = require('../controllers/signin')

module.exports = router
  .post('/', SigninController.signinUser)