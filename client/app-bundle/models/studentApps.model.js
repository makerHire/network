var m = require('mithril');

var studentApps = module.exports = {

  apps: null,
  studentInfo: null,

  // All open applications for all students
  fetchApps: function() {
    m.request({ method: 'GET', url: '/api/appsWithCompanies'})
      .then(function(applications) {
        studentApps.apps = applications.Applications;
      });
  },

  all: function() {
    return {
      apps: studentApps.apps,
      studentInfo: studentApps.studentInfo
    };
  },

  // All student profile info uid (e.g. avatar, name ...)
  fetchInfo: function() {
    m.request({ method: 'GET', url: "/me/" })
      .then(function(userInfo) {
        studentApps.studentInfo = userInfo.user;
      })
  },

};