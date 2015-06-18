var m = require('mithril')
var OutcomesGraph = require('../../components/outcomesGraph/outcomesGraph.js')

exports.controller = function () {
    var ctrl = this
    //this stores all the relevent static information about the student
    //linkedin github....
    // ctrl.prof = m.prop() // TODO: grab from makerpass
    // ctrl.applied = m.prop()
    // //


    // ctrl.test = function() {
    //   alert('Button Works')
    // };
    // ctrl.initialize = function () {
    //   console.log("Getting jobs...")
    //   //GET User job applications from database
    //   m.request({ method: 'GET', url: 'DATABASE API ROUTE' }).then(ctrl.applied)
    // }

    // ctrl.update = function () {
    //   console.log("...")
    //   //Update User job applications from database
    //   m.request({ method: 'POST', url: 'DATABASE API ROUTE' }).then(ctrl.initialize)
    // }

    // ctrl.create = function () {
    //   console.log("...")
    //   //Create User job applications from database
    //   m.request({ method: 'POST', url: 'DATABASE API ROUTE' }).then(ctrl.initialize)
    // }
}

exports.view = function (ctrl) {
  return m('.profile', [
    m('h1', "Hello " + ctrl),
    m('h3', "Current Applications"),
    m('button'),
    m.component(OutcomesGraph)
    //here is where we grab the jobs from the database
    //
    //Phone Screen
    //Technical Screen
    //Coding Challenge
    //On-site interview
  ])
}

// function jobs (ctrl, prof) {
//   return m('.jobs', [
//     m('h4', 'asd')
//     //more stuff
//   ])
// }



  //TODO steal gilberts pluralize function from petshop

  // function pluralize (word, count) {
  //   if (count !== 1) { word = word + 's' }
  //   return count + ' ' + word
  // }

  // m.mount(document.getElementById('app'), StudentProfile)