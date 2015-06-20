var m             	= require('mithril');

//Abstract navbar out to app.layout
var Navbar        	= require('../../components/navbar/navbar.js');

//Forms
var NewApp          = require('../../components/forms/newApp/newApp.js');
var OnsiteInterview = require('../../components/forms/onsiteInterview/onsiteInterview.js');
var PhoneScreen     = require('../../components/forms/phoneScreen/phoneScreen.js');
var CodingChallenge = require('../../components/forms/codingChallenge/codingChallenge.js');

var StudentInfo     = require('../../components/studentInfo/studentInfo.js');
var Messaging     	= require('../../components/messaging/messaging.js');
var Phases          = require('../../components/phases/phases.js');


exports.controller = function () {
  var ctrl = this;
}

exports.view = function (ctrl) {
  return m('.container', [
    m.component(StudentInfo),
    m.component(NewApp),
    m.component(PhoneScreen),
    m.component(OnsiteInterview),
    m.component(CodingChallenge), //Fix coding challenge
    m.component(Phases),
    m.component(Messaging)
  ])
}