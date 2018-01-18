const express = require('express');
const router = express.Router()
const SignUpController = require('../controllers/signup')

module.exports = router
  .post('/', SignUpController.createUser)