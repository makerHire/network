var m = require('mithril');

var studentApps = require('studentApps.model.js')

// studentApps.apps

var newApp = module.exports = {

  autocomplete: null,


  all: function() {
    return newApp.autocomplete;
  },

  // List of all companies all students has applied for
  fetchAutocomplete: function() {
    m.request({ method: 'GET', url: "/API/companies/" })
      .then(function(companies) {
        newApp.autocomplete = companies.Companies;
      });
  },

//POST requests

  postNewApplication: function(applicationFormData) {
    m.request({ method: 'POST', url: "/API/applications/", data: applicationFormData})
  }

};