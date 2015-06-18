// require('./ext/functions.js')

var m = require('mithril')

exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	console.log('navbar-view')
	  return m("html", [
        m("body", [
            m("ul", [
            	m("a#[href='http://localhost:4000/?/']", "Home"),
            	m("a#google.external[href='http://localhost:4000/?/profile']", "Student"),
            	m("a#google.external[href='http://localhost:4000/?/page']", "Crew"),
            	m("a#google.external[href='http://localhost:4000/?/']", "AboutUs")
               ])
            ])
        ]);
	}