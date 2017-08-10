'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res, next) => {
  req.app.emit('event:get_all_customers')
  Customer.find({}).then(function (customers) {
    res.status(200).send(customers)
  }, function (err) {
    res.status(404).send('FOOBAR');
    next()
  })
};
