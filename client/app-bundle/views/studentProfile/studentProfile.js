var m = require('mithril')
var Navbar        = require('../../components/navbar/navbar.js');
var NewApp        = require('../../components/newApp/newApp.js');
var Messaging     = require('../../components/messaging/messaging.js');

exports.controller = function () {
    var ctrl = this
}

exports.view = function (ctrl) {
  return m('.profile', [
    m.component(Navbar),
    m.component(NewApp),
    m.component(Messaging)
  ])
}