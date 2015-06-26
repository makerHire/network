var m = require('mithril');

var exp = module.exports = {

  apps: {1: [], 2: [], 3: []},
// GET requests

  // All open applications for all students
  
  fetch: function() {
    m.request({ method: 'GET', url: '/API/allApps' })
      .then(function(applicationsResponse) {
        exp.apps = {1: [], 2: [], 3: []}
        applicationsResponse.Applications.forEach(function(app){
          exp.apps[app.phase].push(app)
        })
      })
  },

  all: function() {
    return exp.apps
  }
};