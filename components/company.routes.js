require('dotenv').config()
module.exports = (app) => {
  const company = require('./company.controller')

  /** Get all company */
  app.get('/' + process.env.VERSION + '/company/', company.findAll)

  /** Insert new company */
  app.post('/' + process.env.VERSION + '/company/', company.save)
}
