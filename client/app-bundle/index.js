// Include language extensions FIRST
// require('../functions.js')

var m              = require('mithril');
var App            = require('./app.js');
var Auth           = require('../lib/auth.js');
var Outcomes       = require('./views/outcomes/outcomes.js');
var StudentProfile = require('./views/studentProfile/studentProfile.js');
var Outcomes       = require('./views/outcomes/outcomes.js');
var Progress       = require('./views/progress/progress.js');
var Splash         = require('./views/splash/splash.js');

// function signedOutView () {
//   return m('.page', [
//     m('h1', 'Welcome to the Learn App!'),
//     m('p', 'Please sign in to access your course materials.'),
//     m('a[href=/auth/makerpass/]', 'Sign In')
//   ]);
// };

// TODO: Make sure pages can only be accessed when user is authorized

// var goHome = m.route.papp('/')
var routes = {

  '/': {
    controller: function () {
      // Auth.authenticate()
      var ctrl = this;
    },
    view: function (ctrl) {
      return  m.component(Splash)
    }
  },

  '/progress': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(Progress)
      ]);
    }
  },

  '/profile': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(Progress)
      ]);
    }
  },

    '/outcomes': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(Outcomes)
      ]);
    }
  }
};

// m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', routes);
