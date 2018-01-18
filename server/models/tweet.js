const mongoose        = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema          = mongoose.Schema

const tweetsSchema = new Schema({
  userId  : {
    type      : Schema.Types.ObjectId,
    ref       : 'User'  
  },
  post     : {
    type      : String,
    required  : [true, 'Post required']
  },
  hastag  : {
    type      : String
  },
  createdAt : {
    type      : Date,
    default   : new Date()
  }
})

const Tweet = mongoose.model("Tweet", tweetsSchema);
module.exports = Tweet