const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profiles')
const middleware = require('../middleware/auth')
const images = require('../helpers/images')
/* GET users listing. */
module.exports = router
  .get('/:id', ProfileController.getProfile)
  .put('/:id', images.multer.single('image'), images.sendUploadToGCS, middleware, ProfileController.editProfile)
