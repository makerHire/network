var m = require('mithril');


exports.view = function (ctrl, options) {
  return m('.col.m3.s12', [
    m('.div.center-align', [
      m('img.responsive-img[src=' + options['studentInfo'].avatar_url +']')
    ]),
    m('div', 'Name: ' + options['studentInfo'].name),
    m('div', 'Email: ' + options['studentInfo'].email),
    // m('div', 'Status: ' + options['studentInfo'].status || 'Status'),
    // m('div', 'Active: ' + options['studentInfo'].active || 'Active'),
    // m('div', 'School: ' + options['studentInfo'].school || 'School'),
    m('div', 'School: MakerSquare'),
    // m('div', 'Current Company: ' + options['studentInfo'].company || 'Company')
  ]);
};