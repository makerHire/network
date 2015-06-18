var m = require('mithril')

exports.controller = function() {}

exports.view = function(ctrl) {

    return m('.page', [
    		m('.container', 'helloskdsdklfjd'),
        m('.words', 'asdasdsad'),
        m('.words', 'Hello'),
        m('h1', "HELLO JUSTIN")
    ])
}



// <body>
//   <div class = "container">
// 	<!-- Page Content goes here -->

// 		<div class = "row">
//    		<div class = "col s12" > This div is 12 - columns wide </div>
//       <div class="col s6">This div is 6-columns wide</div >
//     	<div class = "col s6" > This div is 6 - columns wide </div>
//     </div>
// 	</div>
// </body>



//Ideas for Outcomes Page
//1) Active vs Inactive users
//Active = actively looking for a job
//Inactive = no longer looking for a job, but data should still be available