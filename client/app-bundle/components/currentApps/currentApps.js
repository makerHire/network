var m = require('mithril');

var allApps = require('../../models/allApps.js')

exports.controller = function () {
  allApps.fetch()
}

exports.view = function (ctrl) {
  var apps = allApps.all()

  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      apps[1].map(function(app){
        if(app.phase === '1'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
      apps[2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
      apps[3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ])
};