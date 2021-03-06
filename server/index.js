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

//enable express router resource which facilitate shared endpoint routing
var resource = require('express-resource');


// bodyparser for endpoint conversion of JSON objects
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


//API endpoint integration
require('./makerpass').mount(app, host);
require('./API/jobsAPI').mount(app);
require('./API/usersAPI').mount(app);
require('./API/companiesAPI').mount(app);
require('./API/groupsAPI').mount(app);
require('./API/applicationsAPI').mount(app);
require('./API/questionsAPI').mount(app);
require('./API/titlesAPI').mount(app);
require('./API/membershipsAPI').mount(app);
require('./API/interviewsAPI').mount(app);
require('./API/contactsAPI').mount(app);
require('./API/schoolsAPI').mount(app);




app.listen(port)
console.log("Listening on port", port)
