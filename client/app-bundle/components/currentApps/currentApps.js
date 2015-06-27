var m = require('mithril');

exports.view = function (ctrl, options) {

  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      options['apps'][1].map(function(app){
        if(app.phase === '1'){   
          console.log(app)
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
      options['apps'][2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
      options['apps'][3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ])
};