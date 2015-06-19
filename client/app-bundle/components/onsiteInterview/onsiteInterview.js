var m = require('mithril');

exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('.row', [
      m('h3.center-align', 'On-site Interview')
    ]),
    m('form.col.s12' , [
      m('.row',
        m('h4.center-align', 'Interviewer')
      ),
      m('.row',[
        m('.input-field.col.s12.m4', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="Name"]'),
          m('label[for=first_name]', "Name")
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=text][placeholder="Role"]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Role")
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=email][placeholder="Email"]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Email")
        ])
      ]),
      m('.row',
        m('h4.center-align', 'Date')
      ),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
          m('label[for=first_name]', "Scheduled For")
        ]),
        m('.input-field.col.s12.m6', [
          m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
          m('label[for=first_name]', "Completed On")
        ])
      ]),
      // <p class="range-field">
      //   <input type="range" id="test5" min="0" max="100" />
      // </p>
      m('p.range-field', 'How did it go?',[
        m('input#test5[type=range][min=0][max=5]')
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



// On-site Interview
// Scheduled for (date and time):
// Completed on (date and time):
// Person(s) Giving Interview (Name, Role, and Email):
// How did it go? (Scale from 1-5):T