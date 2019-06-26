const mongoose = require('mongoose')
/** Declare db model */
let userSchema = {
  'name': String,
  'email': String,
  'password': String
}

/** Constructing Schema */
const User = mongoose.Schema(userSchema)
/** Export */
module.exports = mongoose.model('users', User)
