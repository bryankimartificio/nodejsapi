const UserModel = require('./user.model')
const Promise = require('promise')
require('dotenv').config()

exports.save = (userDetails) => {
  return new Promise(function (resolve, reject) {
    let user = new UserModel(userDetails)
    user.save(function (_err, user) {
      if (_err) {
        resolve({
          statuscode: 500,
          message: 'Error occur while saving data to database.'
        })
      } else {
        resolve({
          statuscode: 200,
          data: user
        })
      }
    })
  })
}
