var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentJobs;

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs['Jobs']);
    });
  
};

//TODO: join query for company name using company_id


exports.view = function (ctrl) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      ctrl.studentJobs().map(function(job){
        return m('li.collection-item avatar', [
          m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
          m('span.title', job.company_id || 'Company Name'),
          m('p', 'Company Name'),
          m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
        ])
      })
    ])
  ])
};