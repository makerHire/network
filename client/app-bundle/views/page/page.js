var m = require('mithril')

exports.controller = function () {}

exports.view = function (ctrl) {
  return m('.page', [
    m('.words', 'Hello'),
    m('.words', 'Hello')
    ])
}
