var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentInfo;
  ctrl.studentJobs;
  // ctrl.update = m.request({ method: 'POST', url: '/me'}, data: )


  //TODO: DRY http requests
  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      return ctrl.studentInfo(info);
    });

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs);
    });
  
};

exports.view = function (ctrl) {
  //TODO: Setup POST request to /me
  return m('.col.m3.s12', [
    m('.row', [
      m('img.responsive-img[src=' + ctrl.studentInfo().user.avatar_url +']')
    ]),
    m('.row', 'Name: ' + ctrl.studentInfo().user.name),
    m('.row', 'Email: ' + ctrl.studentInfo().user.email),
    m('.row', 'Status: ' + ctrl.studentInfo().user.status || 'Status'),
    m('.row', 'Active: ' + ctrl.studentInfo().user.active || 'Active'),
    m('.row', 'School: ' + ctrl.studentInfo().user.school || 'School'),
    m('.row', 'Current Company: ' + ctrl.studentInfo().user.company || 'Company')
  ]);
};