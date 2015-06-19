var m = require('mithril')
var Navbar = require('../../components/navbar/navbar.js')

exports.controller = function () {}

exports.view = function (ctrl) {
  return m('.page', [
  	m.component(Navbar),
    m('.words', 'Hello'),
    m('.words', 'Hello')
    ])
}
