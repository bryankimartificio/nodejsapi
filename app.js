const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dbConfig = require('./config/database.config.js')

/** Load Env file */
require('dotenv').config()

/** Creating express application */
const app = express()

/** Initializing parcer middleware */
app.use(bodyParser.json())

/** Activate mongoose sync call */
mongoose.Promise = global.Promise

/** Connect MongoDB */
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to the database')
  }).catch(_err => {
    console.log('Could not connect to the database. Exiting now...' + _err)
    process.exit()
  })

/** Middlewares */
var middlewaresCors = require('./middlewares/cors.middlewares')(app)
app.use(middlewaresCors)

/** Routes */
app.get('/', (req, res) => res.send('Hello World!'))
require('./components/company.routes')(app)

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
