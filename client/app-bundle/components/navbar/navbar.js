// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	console.log('navbar-view')
	return m("nav", [
			m("div", [
				m("#brand-logo", [
				// m('li', "MakerHire", a),
				m("a[href='/']", {config: m.route}, "MakerHire"),
				m("a[href='/outcomes']",{config: m.route}, "Outcomes"),
				m("a[href='/page']", {config: m.route}, "Student")
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