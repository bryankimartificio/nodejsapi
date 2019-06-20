const CompanyService = require('./company.service')
require('dotenv').config()

// Find All
// Retrieve and return all authenticates from the database.
exports.findAll = (req, res) => {
  CompanyService.findAll().then(function (data) {
    res.send(data)
  })
}

// Post
// Add to the database.
exports.save = (req, res) => {
  if (!req.body.name ||
      !req.body.address ||
      !req.body.city ||
      !req.body.state ||
      !req.body.zip ||
      !req.body.country ||
      !req.body.emailAddr ||
      !req.body.createdDate) {
    res.status(200)
    res.send({
      'statuscode': 400,
      'message': 'Please fill all required field.'
    })
  }

  CompanyService.save(req.body.name,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.zip,
    req.body.country,
    req.body.emailAddr,
    req.body.createdDate).then(function (data) {
    res.send(data)
  })
}
