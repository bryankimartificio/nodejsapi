const Promise = require('promise')
const companyData = require('./company.data')

exports.findAll = () => {
  return new Promise(function (resolve, reject) {
    companyData.findAll().then(function (save) {
      resolve(save)
    })
  })
}

exports.save = (name, address, city, state, zip, country, emailAddr, createdDate) => {
  return new Promise(function (resolve, reject) {
    var companyDetails = {
      'name': name,
      'address': address,
      'city': city,
      'state': state,
      'zip': zip,
      'country': country,
      'email_addr': emailAddr,
      'created_date': createdDate
    }
    companyData.save(companyDetails).then(function (save) {
      resolve(save)
    })
  })
}
