'use strict'

const Customer = require('../models/Customer')

function getModel(email, password, bypass) {
  return {
    email: email,
    bypassEncryption: bypass,
    diplayName: email.split('@')[0]
  }
}

function create (bypass) {
  return function creation (email, done) {
    var model = getModel(email, bypass);
    var customer = new Customer(model);

    customer.save((err) => done(err, customer));
  }
}

function findInternal (method, query, options, done) {
  if (done === void 0) {
    done = options; options = {}
  }

  let cursor = Customer[method](query)
  cursor.exec(done)
  function populateCursor (cursor, options) {
    return cursor.populate.apply(cursor, options)
  }
}

const find = findInternal.bind(null, `find`)

module.exports = {
  find,
  findById: function (id, done) {
    User.findOne({_id: id}, done)
  },
  findOne: function (query, done) {
    User.findOne(query, done)
  },
  create: create(false)
}

