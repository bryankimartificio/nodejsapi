require('dotenv').config()
module.exports = (app) => {
  const company = require('./company.controller')

  /** Get all company */
  app.get('/api/' + process.env.VERSION + '/companies/', company.findAll)

  /** Insert new company */
  app.post('/api/' + process.env.VERSION + '/companies/', company.save)

  /** Delete company */
  app.delete('/api/' + process.env.VERSION + '/companies/:id', company.delete)
}
