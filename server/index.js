require('../ext/arrays.js')
require('../ext/functions.js')
require('../ext/globals.js')

var browserify = require('browserify-middleware')
var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var host = process.env.HOST || 'http://localhost:' + port

//provide a browserified file at a path
var shared = ['mithril', './ext/functions.js']
app.get('/js/vendor.js', browserify(shared))
app.get('/js/app-bundle.js', browserify('./client/app-bundle/index.js', { external: shared }))

// Non-js static files
app.use(express.static('client/public'))


var session = require('cookie-session')
app.use(session({
  name: 'learn:session',
  secret: process.env.SESSION_SECRET || 'development',
  secure: (!! process.env.SESSION_SECRET),
  signed: true
}))

require('./makerpass').mount(app, host)
require('./api/jobsAPI').mount(app)

app.listen(port)
console.log("Listening on port", port)
