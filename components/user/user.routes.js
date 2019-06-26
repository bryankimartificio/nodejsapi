require('dotenv').config()
module.exports = (app) => {
  const user = require('./user.controller')

  /** Register new user */
  app.post('/' + process.env.VERSION + '/register/', user.register)
}
