var m = require('mithril');
var StudentJobs = require('../../studentJobs/studentJobs.js')

exports.controller = function () {
  var ctrl = this;
  var newAppForm = {
    phase: 1,
    date_applied: '',
    contact_id: 1,
    app_method: '',
    user_id: '',
    active: true,
    // location: '',
    title_id: '',
    company_id: ''



  };

m.request({
      method: 'GET',
      url: "/me/"
    }).then(function(req){
      console.log(req.user.uid);
      ctrl.newAppForm = m.prop(newAppForm);
      ctrl.newAppForm().user_id = req.user.uid 
      console.log(ctrl.newAppForm(), 'newAppForm');
    });

  ctrl.postApp = function(e, data) {
    e.preventDefault()

    m.request({
        method: 'POST',
        url: "/API/applications/",
        data: ctrl.newAppForm,
        }).then(function(data) {
          console.log(data, 'postApp');
          // m.redraw.strategy('all')
        })
  };

  ctrl.getCompany = function(e, data) {
    e.preventDefault()
    m.request({
      method: 'GET',
      url: "/API/companies/",
    }).then(function(companies){
      console.log(companies)
    });
  };

};  

var binds = function(data) {
  return {onchange: function(e) {
    data[e.target.name] = e.target.value;
  }};
};



exports.view = function (ctrl) {
  return m('.row', binds(ctrl.newAppForm()), [
    m('.row', [
      m('h3.center-align', 'Initial Application')
    ]),
    m('form.col.s12', [
      m('.row', [
      m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="company"][name=company_id]', {onclick: ctrl.getJob}),
          m('label', "company")
        ]),
      // m('.input-field.col.s12.m6', [
      //     //Should auto complete for common jobs
      //     m('input#first_name.validate[type=text][placeholder="active"][name=active]', {value: ctrl.newAppForm().active}, console.log(ctrl.newAppForm())),
      //     m('label', "active")
      //   ]),
        // m('.input-field.col.s12.m6', [
        //   //Should have a limit of text
        //   m('input#first_name.validate[type=text][placeholder="phase"][name=phase]', {value: ctrl.newAppForm().phase}),
        //   m('label', "phase")
        // ]),
     
        m('.input-field.col.s12.m6', [
          //Should auto complete for common companies
          m('input#first_name.validate[type=text][placeholder=title][name=title_id]', {value: ctrl.newAppForm().title_id}),
          m('label', "title")
        ]),
           m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="application method"][name=app_method]', {value: ctrl.newAppForm().app_method}),
          m('label', "application method")
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input#first_name.datepicker[type=date][placeholder=""][name=date_applied]', {value: ctrl.newAppForm().date_applied}),
          m('label', "")
        ]),
        // m('.input-field.col.s12.m6', [
        //   //Should auto complete for common jobs
        //   m('input#first_name.validate[type=text][placeholder="contact"][name=contact_id]', {value: ctrl.newAppForm().contact_id}),
        //   m('label', "contact")
        // ]),
      ]),
      m('.row.center-align', [
        // m('button.btn.waves-effect.waves-light[type=button]', 'Submit', {onclick: function() {postApp}},
        m('button.btn.waves-effect.waves-light[type=button]', { onclick: ctrl.postApp }, 'Submit', [
          //POST to database
          // m('i.mdi-content-send.right')a
        ])
      ])
    ])
  ])
}