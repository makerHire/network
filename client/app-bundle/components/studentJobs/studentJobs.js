var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentApps;
  ctrl.studentInfo;
  ctrl.companies;

  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      console.log(info.user)
      return ctrl.studentInfo(info.user);
    }).then(function(user){
      m.request({ method: 'GET', url: '/api/appswithcompanies', data: user.uid})
        .then(function(applications) {
          ctrl.studentApps = m.prop();
          console.log(applications,'Applications GET')
          return ctrl.studentApps(applications.Applications);
        });
    })


};


exports.view = function (ctrl) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      ctrl.studentApps().map(function(app){
        if(app.user_id === ctrl.studentInfo().uid){ 
          return m('li.collection-item avatar', [
            m('img[src=' + ctrl.studentInfo().avatar_url + '].circle'),
            m('span.title', app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Active: ' + app.active),
            m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ])
};


