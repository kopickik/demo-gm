'use strict'

const Customer = require('../../models/Customer');

module.exports = (req, res, next) => {
  const customerId = req.params.customerId
  Customer.findOne({
    _id: customerId
  }, function (err, customer) {
    if (err) {
      err.message = 'Could not fetch customer with ID ' + req._id
      return res.status(404).send(err)
    }
    res.status(200).send(customer)
  })
};
