const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
require('mongoose-type-email')

const schema = new mongoose.Schema({
  author: { type: ObjectId, index: { unique: false }, require: true, ref: `User`},
  created: { type: Date, index: { unique: false }, require: true, 'default': Date.now },
  updated: { type: Date, require: true, 'default': Date.now },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  phoneNumber: String,
  streetAddress: String
})

schema.virtual('name')
  .get(function() {
    return this.firstName + ' ' + this.lastName
  })

schema.virtual('url')
  .get(function () {
    return '/api/customers/' + this._id
  })

const api = mongoose.model('Customer', schema)

api.schema = schema

module.exports = api
