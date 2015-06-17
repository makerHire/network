// Include language extensions FIRST
require('./ext/functions.js')

var m = require('mithril')
var Auth = require('../lib/auth.js')
var Page = require('./components/page/page.js')


var App = {}

App.controller = function () {
  var ctrl = this
  ctrl.user = Auth.currentUser()
  ctrl.signOut = function () {
    Auth.signOut().then( ctrl.user.papp(null) )
  }
}

App.view = function (ctrl) {
  return [
    m('h1', "Network.MKS"),
    m.component(Page, { content: "Hello, I am a page component." }),

    ctrl.user() ? [
      m('span', JSON.stringify(ctrl.user())),
      m('a[href=#]', { onclick: ctrl.signOut.chill() }, "Sign Out"),
    ] : [
      m('a[href=/auth/makerpass/callback]', "Sign In"),
    ],

  ]
}

m.mount(document.getElementById('app'), App)
