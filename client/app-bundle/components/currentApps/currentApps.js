var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.allApps;

  m.request({ method: 'GET', url: '/api/appswithcompanies'})
    .then(function(apps) {
      ctrl.allApps = m.prop([]);
      //TODO: separate by phases
      return ctrl.allApps(apps.Applications);
    });
}

exports.view = function (ctrl) {
  console.log(ctrl.allApps(), 'Apps')
  return m('.col.m9.s12', [
    m('h1.center-align', 'Current Open Applications'),
    m('ul.collection', [
      ctrl.allApps().map(function(app){
        console.log(app)
        return m('li.collection-item avatar', [
          m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
          m('span.title', 'WILL BE NAME: ' + app.user_id),
          m('p', 'Title: ' + app.title),
          m('p', 'Company: ' + app.name),
          m('p', 'Phase: ' + app.phase),
          m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
        ])
      })
    ])
  ])
};