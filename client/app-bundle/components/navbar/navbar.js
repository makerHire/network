// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	var links = [
    {title: "Outcomes", url: "/outcomes"},
    {title: "Students", url: "/profile"},
    {title: "Sign Out", url: "/signout"}
  ];
	return m("nav.teal.darken-1", [
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