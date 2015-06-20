var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentInfo;
  ctrl.studentJobs;

  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      return ctrl.studentInfo(info)
    });

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs)
    });
  
}

exports.view = function (ctrl) {
  console.log(ctrl.studentInfo().user.email);
  
  for (var i = 0; i < ctrl.studentJobs().Jobs.length; i++) {
    console.log(ctrl.studentJobs().Jobs[i]);
  };



  return m('div', 'STUDENT INFO HERE~~~')
}