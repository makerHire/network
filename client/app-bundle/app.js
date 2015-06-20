var m = require('mithril');

var Navbar = require('./components/navbar/navbar.js');


exports.controller = function() {
  var ctrl = this;
};


exports.layout = function(view) {
  return m('div', [
    m.component('Navbar'),
    view
    ])
  //render the view  beneath navbar
};
