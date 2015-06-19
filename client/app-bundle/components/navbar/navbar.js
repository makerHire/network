// require('./ext/functions.js')
var m = require('mithril')


exports.controller = function () {
	var ctrl = this;
}

exports.view = function (ctrl) {
	console.log('navbar-view')
	return m("nav", [
			m("ul", [
				m("a#brand-logo", [
				m('li', "MakerHire"),
				m('li', "Outcomes"),
				m('li', "Student")
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