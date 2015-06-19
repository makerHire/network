var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('ul[data-collapsible="accordion"]', {class: "collapsible"}, [
    m('li', [
      m('div', {class: 'collapsible-header'}, "In-Person Interviews"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
    m('li', [
      m('div', {class: 'collapsible-header'}, "Phone Interviews"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
    m('li', [
      m('div', {class: 'collapsible-header'}, "Follow Ups"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
        m('li', [
      m('div', {class: 'collapsible-header'}, "Element 4"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ])
  ])
}
