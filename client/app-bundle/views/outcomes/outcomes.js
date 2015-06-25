var m = require('mithril')
var Navbar         = require('../../components/navbar/navbar.js')
var Phases         = require('../../components/phases/phases.js')
var OutcomesGraph  = require('../../components/outcomesGraph/outcomesGraph.js')
var Messaging      = require('../../components/messaging/messaging.js')
var CurrentApps        = require('../../components/currentApps/currentApps.js')

exports.controller = function() {}

exports.view = function(ctrl) {

  return m('.container', [
    m.component(OutcomesGraph),
    m.component(Phases),
    m.component(Messaging),
    m.component(CurrentApps)
  ])
}