const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (options) {
  return function (req, res, next) {
    let token = req.headers['x-access-token']
    if (!token) return res.status(401).send({ statuscode: 400, message: 'No token provided.' })
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) return res.status(500).send({ statuscode: 401, message: 'Failed to authenticate token.' })
    })
    next()
  }
}
