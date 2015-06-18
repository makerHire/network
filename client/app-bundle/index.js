// Include language extensions FIRST
// require('../ext/functions.js')

var m = require('mithril')
// var App = require('app.js')
var Auth = require('../lib/auth.js')
var Page = require('./views/page/page.js')
var Outcomes = require('./views/outcomes/outcomes.js')
var StudentProfile = require('./views/studentProfile/studentProfile.js')

// var goHome = m.route.papp('/', null, null)
var routes = {

  '/': {
    controller: function () {
      // Auth.authenticate()
      var ctrl = this
    },
    view: function (ctrl) {
      return signedOutView()
    }
  },


  '/page': {
    controller: function () {
      var ctrl = this
    },
    view: function (ctrl) {
      return m.component(Page)
    }
  },


  '/profile': {
    controller: function () {
      var ctrl = this
    },
    view: function (ctrl) {
      return m.component(StudentProfile)
    }
  },

    '/outcomes': {
    controller: function () {
      var ctrl = this
    },
    view: function (ctrl) {
      return m.component(Outcomes)
    }
  }

}

// m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', routes);


function signedOutView () {
  return m('.page', [
    m('h1', "Welcome to the Learn App!"),
    m('p', "Please sign in to access your course materials.")
  ])
}