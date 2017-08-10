'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res, next) => {
  // if (req.fresh) {
    req.app.emit('event:get_all_customers', req, res)
    Customer.find({}, function (err, customers) {
    if (err) return res.status(500).send('There was an issue fetching customers.')
    res.status(200).send(customers)
  })
  // }

};
