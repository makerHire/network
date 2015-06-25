var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentApps;
  ctrl.studentInfo;
  ctrl.companies;

  // var mHttp = function(method, url, promise, reqData) {
  //   m.request({ method: method, url: url})
  //     .then(promise)
  // };
  //TODO: Make work for post request and data - jh
  // mHttp('GET', '/api/jobs', function(jobs) {
  //     ctrl.studentJobs = m.prop();
  //     return ctrl.studentJobs(jobs['Jobs']);
  //   })

  m.request({ method: 'GET', url: '/api/appswithcompanies'})
    .then(function(applications) {
      ctrl.studentApps = m.prop();
      console.log(applications,'Applications GET')
      return ctrl.studentApps(applications.Applications);
    });

  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      return ctrl.studentInfo(info.user);
    })


};


exports.view = function (ctrl) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      ctrl.studentApps().map(function(app){
          return m('li.collection-item avatar', [
            m('img[src=' + ctrl.studentInfo().avatar_url + '].circle'),
            m('span.title', app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Active: ' + app.active),
            m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
      })
    ])
  ])
};


