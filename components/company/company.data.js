const CompanyModel = require('./company.model')
const Promise = require('promise')
const Mongoose = require('mongoose')
require('dotenv').config()

exports.save = (companyDetails) => {
  return new Promise(function (resolve, reject) {
    let user = new CompanyModel(companyDetails)
    user.save(function (_err) {
      if (_err) {
        resolve({
          statuscode: 400,
          message: 'Error occur while saving data to database.'
        })
      } else {
        resolve({
          statuscode: 200,
          message: 'Successfully save company'
        })
      }
    })
  })
}

exports.findAll = () => {
  return new Promise(function (resolve, reject) {
    try {
      CompanyModel.find()
        .then(company => {
          resolve({
            statuscode: 200,
            data: company
          })
        }).catch(_err => {
          resolve({
            statuscode: 500,
            data: 'Error occur while retrieving data from database.'
          })
        })
    } catch (e) {
      resolve({
        'statuscode': 400,
        'message': e
      })
    }
  })
}

exports.delete = (id) => {
  return new Promise(function (resolve, reject) {
    CompanyModel.findByIdAndDelete(Mongoose.Types.ObjectId(id), function (_err, data) {
      if (_err) {
        resolve({
          statuscode: 400,
          message: 'Error occur while deleting data to database.'
        })
      } else {
        resolve({
          statuscode: 200,
          message: 'Company deleted successfully'
        })
      }
    })
  })
}
