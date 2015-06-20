// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	var links = [
    {title: "Home", url: "/"},
    {title: "Outcomes", url: "?/outcomes"},
    {title: "Students", url: "?/profile"}
];
	console.log('navbar-view')
	return m("nav", [
		m('.nav-wrapper', [
			m("a[href='#']#brand-logo", "MakerHire", [
			m("ul#nav-mobile.right.hide-on-med-and-down", [
				m('li', links.map(function(link) {
            		return m("li",
                		m("a", {href: link.url}, link.title) 
                	)}
                	))
            	])
			])
		])
	])
}

  // <nav>
  //   <div class="nav-wrapper">
  //     <a href="#" class="brand-logo">Logo</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="components.html">Components</a></li>
  //       <li><a href="javascript.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>