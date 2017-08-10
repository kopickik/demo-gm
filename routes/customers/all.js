'use strict'

const Customer = require('../../models/Customer')

module.exports = (req, res, next) => {
  // if (req.fresh) {
    req.app.emit('event:get_all_customers', req, res)
    Customer.find({}).then(function (customers) {
      res.status(200).send(customers)
    }, function (err) {
      res.status(500).send(err)
      next()
    })
  // }

  if (!req.fresh) { req.app.emit('event:get_all_customers_stale', req, res)}
};
