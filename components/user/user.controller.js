const UserService = require('./user.service')
require('dotenv').config()

// Register new user.
exports.register = (req, res) => {
  // Validation
  if (!req.body.name ||
    !req.body.email ||
    !req.body.password) {
    res.status(200)
    res.send({
      'statuscode': 400,
      'message': 'Please fill all required field.'
    })
  }

  UserService.register(req.body.name, req.body.email, req.body.password).then(function (data) {
    res.send(data)
  })
}
