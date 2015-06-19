// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	console.log('navbar-view')
	return m("nav", [
		m(".nav-wrapper", [
			m("ul", [
				m("a#brand-logo[href='#']", "MakerHire"),
				m("ul", {id: "nav-mobile"}, {class: "right hide-on-med-and-down"}, [
					m('li', "a[href='sass.html']"),
					m('li', "a[href='components.html']"),
					m('li', "a[href='javascript.html']")
					])
				])
			])
		])
}

	 //  <nav>
  //   <div class="nav-wrapper">
  //     <a href="#" class="brand-logo">Logo</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="components.html">Components</a></li>
  //       <li><a href="javascript.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>