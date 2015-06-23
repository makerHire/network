var m = require('mithril');
var Underscore = require('underscore');

exports.controller = function () {
  var ctrl = this;
  this.newAppForm = {
    name: '',
    location: '',
    phoneNumber:'',
    date: '',
    email: '',


  };
  this.postApp = function(e, data) {
    e.preventDefault()
    var collection = ctrl.newAppForm;
    if(collection.contains("")) {
      alert('please fill out entire form');
      return;
    }
    else {
          m.request({
              method: 'POST',
              url: "/API/jobs/",
              data: this.newAppForm,
              }).then(console.log('success', ctrl.newAppForm));        
          }
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
          m('input#first_name.validate[type=text][placeholder=name][name=name]', {value: ctrl.newAppForm.name}, console.log(ctrl.newAppForm)),
          m('label[for=first_name]', "name")
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common companies
          m('input#first_name.validate[type=text][placeholder=location][name=location]', {value: ctrl.newAppForm.location}),
          m('label[for=first_name]', "location")
        ])
      ]),
      m('.row', [
        m('.input-field.col.s12.m6', [
          m('input#first_name.validate[type=text][placeholder="phone number"][name=phoneNumber]', {value: ctrl.newAppForm.phoneNumber}),
          m('label[for=first_name]', "phone number")
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input#first_name.datepicker[type=date][placeholder="date applied"][name=date]', {value: ctrl.newAppForm.date}),
          m('label[for=first_name]', "date applied")
        ])
      ]),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="email"][name=email]', {value: ctrl.newAppForm.email}),
          m('label[for=first_name]', "email address")
        ]),
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
// var postApp = function(data) {
//   m.request({
//               method: 'POST',
//               url: "/API/jobs/",
//               data: ctrl.newAppForm,
//               }).then(console.log('success', ctrl.newAppForm));
// }