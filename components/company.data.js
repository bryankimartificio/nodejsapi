const CompanyModel = require('./company.model')
const Promise = require('promise')
require('dotenv').config()
const Moment = require('moment')

exports.save = (companyDetails) => {
  return new Promise(function (resolve, reject) {
    let company = new CompanyModel(companyDetails)
    company.save(function (_err) {
      resolve({
        statuscode: 500,
        message: 'Failed to save company'
      })
    })
    resolve({
      statuscode: 200,
      message: 'Company successfully saved'
    })
  })
}

exports.findAll = () => {
  return new Promise(function (resolve, reject) {
    try {
      CompanyModel.find()
        .then(company => {
          var _resp = {
            'statuscode': 200,
            'data': company
          }
          resolve(_resp)
        }).catch(_err => {
          var _resp = {
            'statuscode': 200,
            'data': 'Error occur while retrieving data from database.'
          }
          resolve(_resp)
        })
    } catch (e) {
      console.log(e)
      var _resp = {
        'statuscode': 400,
        'message': e
      }
      resolve(_resp)
    }
  })
}
