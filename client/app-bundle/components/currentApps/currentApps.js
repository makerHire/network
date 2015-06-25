var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.allApps;

  m.request({ method: 'GET', url: '/api/allApps'})
    .then(function(apps) {
      ctrl.allApps = m.prop({1:[],2:[],3:[]});
      console.log(apps, 'APPS from server')
      apps.Applications.forEach(function(app){
        ctrl.allApps()[app.phase].push(app)
      })

      console.log(ctrl.allApps()[1], 'asdfsdf')
      return ctrl.allApps();
    });
}

exports.view = function (ctrl) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      ctrl.allApps()[1].map(function(app){
        if(app.phase === '1'){   
          return m('li.collection-item avatar', [
            m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
            m('span.title', 'WILL BE NAME: ' + app.user_id),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.name),
            m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
      ctrl.allApps()[2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
            m('span.title', 'WILL BE NAME: ' + app.user_id),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.name),
            m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
      ctrl.allApps()[3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
            m('span.title', 'WILL BE NAME: ' + app.user_id),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.name),
            m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ])
};