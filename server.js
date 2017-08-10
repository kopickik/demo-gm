'use strict'

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const winston = require('winston')
const rlog = require('./node_modules/bunyan-request-logger/request-logger.js')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const helmet = require('helmet')
const request = require('request')
const noCache = require('connect-cache-control')
const errorHandler = require('express-error-handler')
const http = require('http')
const Customer = require('./models/Customer')
const dbConfig = require('./config/db')
const routes = require('./routes')

const app = express()
var log = rlog()
var env = process.env

app.use(log.requestLogger())

app.get('/log.gif', noCache, log.route() )

app.get('/error', function createError(req, res, next) {
  var err = new Error('Sample error')
  err.status = 500
  next(err)
})

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
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.url).then(function () {

}).catch(function (err) {
  app.emit('event:db_err', err.message)
});

const db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// app.on('event:db_connected', function () {
//   logger('Database connected.' + new Date())
// })
// app.on('event:db_err', function (message) {
//   request('http://localhost:8080/api');
// })
// app.on('customers:getAll', function (req, res) {
//   logger(req)
//   logger(res)
// })
// db.once('connected', function () { app.emit('event:db_connected')})

// app.use(express.static(__dirname + '/app'))
// app.use(logger('short'))

app.use('/api', routes)// all of our API routes

app.use(log.errorLogger())

var server = http.createServer(app);

app.use(errorHandler({server: server}))

server.listen(port, function () {
  log.info('Listening on port ' + port)
})
