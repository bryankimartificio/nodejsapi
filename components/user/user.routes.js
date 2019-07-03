require('dotenv').config()
module.exports = (app) => {
  const user = require('./user.controller')

  /** Register new user */
  app.post('/api/' + process.env.VERSION + '/authentications/', user.register)
}
