'use strict'

const fs = require('fs')
const nconf = require('nconf')

nconf.use('memory')
nconf.argv()
nconf.env()

// nconf.file(`private`,  `deploy/env/.env.` + env() + `.json`)
nconf.file(`local`,    `.env.json`)
nconf.file(`public`,   `.env.` + env() + `.json`)
nconf.file(`defaults`, `.env.defaults.json`)

accessor(`CWD`, process.cwd())

process.env.NODE_ENV = env() // consistency

if (module.parent) {
  module.exports = accessor
} else {
  print()
}

function env () {
  return nconf.get(`NODE_ENV`)
}

function accessor (key, value) {
  if (arguments.length === 2) {
    return nconf.set(key, value)
  }
  return nconf.get(key)
}

function print () {
  const argv = process.argv
  const prop = argv.length > 2 ? argv.pop() : false
  const unsafeConf = prop ? accessor(prop) : accessor()
  const conf = unsafeConf || {}
  if (prop === `BROWSER_ENV`) {
    conf.NODE_ENV = accessor(`NODE_ENV`)
    conf.AUTHORITY = accessor(`AUTHORITY`)
    conf.APP_VERSION = accessor(`APP_VERSION`)
    conf.CWD = ``
  }
  console.log(JSON.stringify(conf, null, 2))
}
