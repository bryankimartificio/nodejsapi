const Promise = require('promise')
const UserData = require('./user.data')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

exports.register = (name, email, password) => {
  return new Promise(function (resolve, reject) {
    let hashedPassword = bcrypt.hashSync(password, 8)
    let userDetails = {
      'name': name,
      'email': email,
      'password': hashedPassword
    }
    // Save user data
    UserData.save(userDetails).then(function (user) {
      if (user.statuscode === 200) {
        // Create JWT token
        let token = jwt.sign({ id: user.data._id }, process.env.SECRET, {
          expiresIn: 86400 // expires in 24 hours
        })
        resolve({
          statuscode: 200,
          token: token
        })
      } else {
        resolve(user)
      }
    })
  })
}
