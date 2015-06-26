var m = require('mithril')
var Navbar         = require('../../components/navbar/navbar.js')
var Phases         = require('../../components/phases/phases.js')
var OutcomesGraph  = require('../../components/outcomesGraph/outcomesGraph.js')
var Messaging      = require('../../components/messaging/messaging.js')
var CurrentApps        = require('../../components/currentApps/currentApps.js')

//Models
var allApps = require('../../models/allApps.model.js')

exports.controller = function () {
  allApps.fetch()
}

exports.view = function(ctrl) {
  var apps = allApps.all()

  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    // m.component(OutcomesGraph),
    // m.component(Phases),
    // m.component(Messaging),
    m.component(CurrentApps, {apps: apps})
  ])
}