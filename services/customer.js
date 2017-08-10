'use strict'

const Customer = require('../models/Customer')

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

module.exports = {find}

