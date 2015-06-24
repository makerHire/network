var m = require('mithril');
var Underscore = require('underscore');

exports.controller = function () {
  var ctrl = this;
  this.newAppForm = {
    id: '',
    phase: '',
    date_applied: '',
    contact_id: '',
    app_method: '',
    user_id: '',
    active: '',
    location: '',
    title_id: '',
    company_id: ''



  };
  this.postApp = function(e, data) {
    e.preventDefault()
    var collection = ctrl.newAppForm;
          m.request({
              method: 'POST',
              url: "/API/applications/",
              data: ctrl.newAppForm,
              }).then(console.log('success', ctrl.newAppForm));

  };
  this.getJob = function(e, data) {
    e.preventDefault()
    m.request({
      method: 'GET',
      url: "/API/companies/",
    }).then(function(companies){
      console.log(companies);
    });
  }
};

var binds = function(data) {
  return {onchange: function(e) {
    data[e.target.name] = e.target.value;
  }};
};




exports.view = function (ctrl) {
  return m('.row', binds(ctrl.newAppForm), [
    m('.row', [
      m('h3.center-align', 'Initial Application')
    ]),
    m('form.col.s12', [
      m('.row', [
      m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="company"][name=company]', {onclick: ctrl.getJob}),
          m('label[for=first_name]', "company")
        ]),
      m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input#first_name.datepicker[type=text][placeholder="active"][name=active]', {value: ctrl.newAppForm.active}),
          m('label[for=first_name]', "active")
        ]),
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="phase"][name=phase]', {value: ctrl.newAppForm.phase}),
          m('label[for=first_name]', "phase")
        ]),
     
        m('.input-field.col.s12.m6', [
          //Should auto complete for common companies
          m('input#first_name.validate[type=text][placeholder=location][name=location]', {value: ctrl.newAppForm.location}),
          m('label[for=first_name]', "location")
        ]),
           m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="application method"][name=app_method]', {value: ctrl.newAppForm.app_method}),
          m('label[for=first_name]', "application method")
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input#first_name.datepicker[type=date][placeholder=""][name=date_applied]', {value: ctrl.newAppForm.date_applied}),
          m('label[for=first_name]', "date applied")
        ])
      ]),
      m('.row', [  
     
   
      ]),
      m('.row', [
        // m('button.btn.waves-effect.waves-light[type=button]', 'Submit', {onclick: function() {postApp}},
        m('button.btn.waves-effect.waves-light[type=button]', { onclick: ctrl.postApp }, 'Submit', [
          //POST to database
          // m('i.mdi-content-send.right')a
        ])
      ])
    ])
  ])
}