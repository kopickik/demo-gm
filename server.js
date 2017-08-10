'use strict'

const env = require('./lib/env')
const boot = require('./lib/boot')// db
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const Customer = require('./models/Customer')
const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'pug')

var port = process.env.PORT || 8080

app.use(helmet())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:9000')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept')
  next()
})

// Base setup (db)

boot()

app.on('event:initial_db_connection_failed', function () {
  console.log('this thing heard your event.')
})
app.on('event:get_all_customers', function () {
  console.log('Trying to Fetch all customers.')
})

app.use(express.static(__dirname + '/app'))
app.use(logger('short'))

app.use('/api', routes)// all of our API routes

app.listen(port)
console.log('Express app listening on port ' + port)

