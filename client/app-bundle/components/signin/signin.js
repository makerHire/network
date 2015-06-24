// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('div', [
    m('h1.center-align', 'Welcome to the Network'),
    m('p.center-align', 'Please sign in to access your future.'),
    m('.center-align', [
      m('a[href=/auth/makerpass/]', [
        m('button.btn', 'Sign In')
      ])
    ])  
  ]);
}