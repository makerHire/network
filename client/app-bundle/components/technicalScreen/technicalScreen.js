var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('form', {class: "col s12"}, [
      m('.row', [
        m('div', {class: "input-field col s12 m6"}, [
          m('input#first_name.validate[type=text][placeholder=Company]'),
          m('label[for=first_name]', "Company")
        ]),
        m('div', {class: "input-field col s12 m6"}, [
          //Should auto complete for common companies
          m('input#first_name.validate[type=text][placeholder=Location]'),
          m('label[for=first_name]', "Location")
        ])
      ]),
      m('.row', [
        m('div', {class: "input-field col s12 m6"}, [
          m('input#first_name.validate[type=text][placeholder="Company Website"]'),
          m('label[for=first_name]', "Company Website")
        ]),
        m('div', {class: "input-field col s12 m6"}, [
          //Should auto complete for common jobs
          m('input#first_name.validate[type=text][placeholder="Job Title"]'),
          m('label[for=first_name]', "Job Title")
        ])
      ]),
      m('.row', [
        m('div', {class: "input-field col s12 m6"}, [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="How it Became a Lead"]'),
          m('label[for=first_name]', "How it Became a Lead")
        ]),
        m('div', {class: "input-field col s12 m6"}, [
          m('input#first_name.validate[type=text][placeholder=Application Method]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Application Method")
        ])
      ]),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
          m('label[for=first_name]', "Date Applied")
        ]),
        m('.input-field.col.s12.m6', [
          m('input#first_name.validate[type=text][placeholder=Application Method]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Application Method")
        ])
      ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit',[
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ])
}
