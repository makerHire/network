var m = require('mithril');

exports.view = function (ctrl, options) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      options['apps'].map(function(app){
        return m('li.collection-item avatar', [
          m('img[src=' + options['studentInfo'].avatar_url + '].circle'),
          m('span.title', app.company_name),
          m('p', 'Title: ' + app.title),
          m('p', 'Date Applied: ' + app.date_applied.slice(0,10)),
          // m('p', 'Active: ' + app.active),
          // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
        ])
      })
    ])
  ])
};


