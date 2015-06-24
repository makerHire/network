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
  return m('.container', [
    m.component(NewApp),
    m.component(StudentInfo)
  ]) 
}