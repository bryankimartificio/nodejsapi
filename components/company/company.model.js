const mongoose = require('mongoose')
/** Declare db model */
let companySchema = {
  'name': String,
  'address': String,
  'city': String,
  'state': String,
  'zip': Number,
  'country': String,
  'email_addr': String,
  'created_date': String
}

/** Constructing Schema */
const Company = mongoose.Schema(companySchema)
/** Export */
module.exports = mongoose.model('companies', Company)
