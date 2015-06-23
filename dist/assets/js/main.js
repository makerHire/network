var m = require('mithril');

var Navbar = require('./components/navbar/navbar.js');


exports.controller = function() {
  var ctrl = this;
};


exports.layout = function(viewContents) {
  return m('div', [
    m.component(Navbar),
    viewContents
  ]);
};

// Include language extensions FIRST
// require('../functions.js')

var m = require('mithril');
var App = require('./app.js');
var Auth = require('../lib/auth.js');
var Page = require('./views/page/page.js');
var Outcomes = require('./views/outcomes/outcomes.js');
var StudentProfile = require('./views/studentProfile/studentProfile.js');

function signedOutView () {
  return m('.page', [
    m('h1', 'Welcome to the Learn App!'),
    m('p', 'Please sign in to access your course materials.'),
    m('a[href=/auth/makerpass/]', 'Sign In')
  ]);
};

// TODO: Make sure pages can only be accessed when user is authorized

// var goHome = m.route.papp('/')
var routes = {

  '/': {
    controller: function () {
      // Auth.authenticate()
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        signedOutView()
      ]);
    }
  },

  '/page': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(Page)
      ]);
    }
  },

  '/profile': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(StudentProfile)
      ]);
    }
  },

    '/outcomes': {
    controller: function () {
      var ctrl = this;
    },
    view: function (ctrl) {
      return App.layout([
        m.component(Outcomes)
      ]);
    }
  }
};

// m.route.mode = 'pathname';
m.route(document.getElementById('app'), '/', routes);

var m = require('mithril')

var user = null

exports.currentUser = function () {
  // TODO: Cache for X amount of time
  return m.request({ method: 'GET', url: '/me' })
    .then(function (response) {
      return response.user
    })
}

exports.signOut = function () {
  return m.request({ method: 'POST', url: '/signout' })
}

var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('form.col.s12', [
      m('.row', [
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea'),
          m('label[for=icon_prefix2]', "Message")
        ]),
        m('.row', [
          m('button.btn.waves-effect.waves-light', 'Send Message',[
            //POST to database
            m('i.mdi-content-send.right')
          ])
        ])
      ])
    ])
  ])
}
// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	var links = [
    {title: "Home", url: "/"},
    {title: "Outcomes", url: "/outcomes"},
    {title: "Students", url: "/profile"}
  ];
	console.log('navbar-view')
	return m("nav", [
		m('.nav-wrapper', [
			m("a[href='#']#brand-logo", "MakerHire", [
			m("ul#nav-mobile.right.hide-on-med-and-down", [
				m('li', links.map(function(link) {
      		return m("li",
          		m("a", { href: link.url, config: m.route }, link.title) 
          	)}
          ))
      	])
			])
		])
	])
}
var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('graphContainer', [
    m('.graph', [
      m('h1', "Student Progress"),
      m('.graph', "This will be a graph"),
    ]),
    m('.graph', [
      m('h1', "Other Progress"),
      m('.graph', "This will be another graph"),
    ]),
    m('.graph', [
      m('h1', "Third Progress"),
      m('.graph', "This will be the third graph"),
    ])
  ])
}
var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('ul[data-collapsible="accordion"]', {class: "collapsible"}, [
    m('li', [
      m('div', {class: 'collapsible-header'}, "In-Person Interviews"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
    m('li', [
      m('div', {class: 'collapsible-header'}, "Phone Interviews"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
    m('li', [
      m('div', {class: 'collapsible-header'}, "Follow Ups"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ]),
        m('li', [
      m('div', {class: 'collapsible-header'}, "Element 4"),
      m('div', {class: 'collapsible-body'}, "List Students"),
    ])
  ])
}

var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentInfo;
  ctrl.studentJobs;
  // ctrl.update = m.request({ method: 'POST', url: '/me'}, data: )


  //TODO: DRY http requests
  m.request({ method: 'GET', url: '/me'})
    .then(function(info) {
      ctrl.studentInfo = m.prop();
      return ctrl.studentInfo(info);
    });

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs);
    });
  
};

exports.view = function (ctrl) {
  //TODO: Setup POST request to /me
  console.log(ctrl.studentInfo().user.email);
  console.log(ctrl.studentJobs());
  return m('.row', [
    m('.row', ctrl.studentInfo().user.name),
    m('.row', ctrl.studentInfo().user.email),
    m('.row', ctrl.studentInfo().user.status || 'Status'),
    m('.row', ctrl.studentInfo().user.active || 'Active'),
    m('.row', ctrl.studentInfo().user.school || 'School'),
    m('.row', ctrl.studentInfo().user.company || 'Company'),
    m('.row', [
      m('img[src=' + ctrl.studentInfo().user.avatar_url +']')
    ])
  ]);
};
var m = require('mithril')
var Navbar         = require('../../components/navbar/navbar.js')
var Phases         = require('../../components/phases/phases.js')
var OutcomesGraph  = require('../../components/outcomesGraph/outcomesGraph.js')
var Messaging      = require('../../components/messaging/messaging.js')

exports.controller = function() {}

exports.view = function(ctrl) {

  return m('.container', [
    m.component(OutcomesGraph),
    m.component(Phases),
    m.component(Messaging)
  ])
}

//TO get users: GET request to 

// <body>
//   <div class = "container">
// 	<!-- Page Content goes here -->

// 		<div class = "row">
//    		<div class = "col s12" > This div is 12 - columns wide </div>
//       <div class="col s6">This div is 6-columns wide</div >
//     	<div class = "col s6" > This div is 6 - columns wide </div>
//     </div>
// 	</div>
// </body>



//Ideas for Outcomes Page
//1) Active vs Inactive users
//Active = actively looking for a job
//Inactive = no longer looking for a job, but data should still be available
var m = require('mithril')
var Navbar = require('../../components/navbar/navbar.js')

exports.controller = function () {}

exports.view = function (ctrl) {
  return m('.page', [
  	m.component(Navbar),
    m('.words', 'Hello'),
    m('.words', 'Hello')
    ])
}

var m             	= require('mithril');
var Navbar        	= require('../../components/navbar/navbar.js');
var NewApp        	= require('../../components/forms/newApp/newApp.js');
var Messaging     	= require('../../components/messaging/messaging.js');
var OnsiteInterview = require('../../components/forms/onsiteInterview/onsiteInterview.js');
var Phases        	= require('../../components/phases/phases.js');
var PhoneScreen     = require('../../components/forms/phoneScreen/phoneScreen.js');
var StudentInfo   	= require('../../components/studentInfo/studentInfo.js');


exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.profile', [
    m.component(StudentInfo),
    m.component(NewApp),
    m.component(PhoneScreen),
    m.component(Phases),
    m.component(Messaging),
    m.component(OnsiteInterview),
  ])
}
var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('.row', [
      m('h3.center-align', 'Coding Challenge')
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
      m('.row', [
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea'),
          m('label[for=icon_prefix2]', "Coding Prompt")
        ]),
        m('.row', [
          m('button.btn.waves-effect.waves-light', 'Submit Prompt',[
            //POST to database
            m('i.mdi-content-send.right')
          ])
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

var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('h3.center-align', 'Initial Application'),
    m('form.col.s12', [
      m('.input-field.col.s12.m6', [
        m('input#first_name.validate[type=text][placeholder=Company]'),
        m('label[for=first_name]', "Company")
      ]),
      m('.input-field.col.s12.m6', [
        //Should auto complete for common companies
        m('input#first_name.validate[type=text][placeholder=Location]'),
        m('label[for=first_name]', "Location")
      ]),

      m('.input-field.col.s12.m6', [
        m('input#first_name.validate[type=text][placeholder="Company Website"]'),
        m('label[for=first_name]', "Company Website")
      ]),
      m('.input-field.col.s12.m6', [
        //Should auto complete for common jobs
        m('input#first_name.validate[type=text][placeholder="Job Title"]'),
        m('label[for=first_name]', "Job Title")
      ]),
      m('.input-field.col.s12.m6', [
        //Should have a limit of text
        m('input#first_name.validate[type=text][placeholder="How it Became a Lead"]'),
        m('label[for=first_name]', "How it Became a Lead")
      ]),
      m('.input-field.col.s12.m6', [
        m('input#first_name.validate[type=text][placeholder=Application Method]'),
        //Should autocomplete for common methods
        m('label[for=first_name]', "Application Method")
      ]),
      m('.input-field.col.s12.m6', [
        //Should have a limit of text
        m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
        m('label[for=first_name]', "Date Applied")
      ]),
      m('.input-field.col.s12.m6', [
        m('input#first_name.validate[type=text][placeholder=Application Method]'),
        //Should autocomplete for common methods
        m('label[for=first_name]', "Application Method")
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
var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.row', [
    m('.row', [
      m('h3.center-align', 'Phone Screen')
    ]),
    m('form.col.s12' , [
      m('.row',
        m('h4.center-align', 'Person Contacted')
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


// Scheduled for (date and time):
// Completed on (date and time):
// Person(s) Giving Screen (Name, Role, and Email):
// How did it go? (Scale from 1-5):
// The Next Step:

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
