var m               = require('mithril');
var Signin          = require('../../components/signin/signin.js');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.container', [
      m.component(Signin)
  ])
}