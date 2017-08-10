'use strict'

const router = require('express').Router({ mergeParams: true })
const bodyParser = require('body-parser')
const all = require('./all')
const single = require('./single')
const create = require('./create')
const update = require('./update')
const remove = require('./remove')

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', all)
router.post('/', create)
router.get('/:customerId', single)
router.put('/:customerId', update)
router.delete('/:customerId', remove)
router.get('/:customerId/view', single)
router.get('/:customerId/edit', single)
router.put('/:customerId/edit', update)


module.exports = router
