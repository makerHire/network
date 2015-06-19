var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('graphContainer', [
    m('.graph', [
      m('h1', "Student Progress"),
      m('.graph', "This will be a graph"),
    ]),
    m('.graph', [
      m('h1', "Other Progress"),
      m('.graph', "This will be another graph"),
    ]),
    m('.graph', [
      m('h1', "Third Progress"),
      m('.graph', "This will be the third graph"),
    ])
  ])
}