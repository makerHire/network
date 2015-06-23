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
