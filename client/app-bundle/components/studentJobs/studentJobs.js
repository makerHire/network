var m = require('mithril');

var StudentApps = require('../../models/studentApps.js')

exports.controller = function () {
  StudentApps.fetchApps();
  StudentApps.fetchAutocomplete();
  StudentApps.fetchInfo();
};


exports.view = function (ctrl) {
  var modelData = StudentApps.all()
  var apps = modelData['apps'];
  var autocomplete = modelData['autocomplete'];
  var studentInfo = modelData['studentInfo'];
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      apps.map(function(app){
        return m('li.collection-item avatar', [
          m('img[src=' + studentInfo.avatar_url + '].circle'),
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


