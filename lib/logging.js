'use strict'

let moment = require('moment')
let winston = require('winston')
let mongo = require('winston-mongodb').MongoDB
let env = require('./env')
let hosted = env('NODE_ENV') !== 'development'
let level = env('LOGGING_LEVEL')
let dbUri = env('MONGO_URI')
let devtime = 'mm:ss'
let prodtime = 'DD MMM HH:mm:ss'
let time = hosted ? prodtime : devtime
let stdout = winston.transports.Console

function createWriteStream (level) {
  return {
    write: function () {
      var args = Array.prototype.slice.call(arguments)
      args[0] = args[0].replace(/\n+$/, '')// remove trailing breaks
      winston[level].apply(winston, args)
    }
  }
}

function configure () {
  winston.createWriteStream = createWriteStream

  winston.remove(stdout)
  winston.add(stdout, {
    level: level,
    timestamp: timestamp,
    colorize: !hosted
  })
  winston.add(mongo, {
    level: level,
    url: dbUri
  })
}

function timestamp () {
  return moment().format(time)
}

module.exports = { configure: configure }
