var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  ctrl.studentJobs;

  m.request({ method: 'GET', url: '/api/jobs'})
    .then(function(jobs) {
      ctrl.studentJobs = m.prop();
      return ctrl.studentJobs(jobs['Jobs']);
    });
  
};

exports.view = function (ctrl) {
  return m('.col.m9.s12', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      ctrl.studentJobs().map(function(job){
        return m('li.collection-item avatar', [
          m('img[src=https://avatars.githubusercontent.com/u/5953350?v=3].circle'),
          m('span.title', job.company_id || 'Company Name'),
          m('p', 'Company Name'),
          m('a.secondary-content[href=#]', [
            m('button.btn', 'Update')
          ])
        ])
      })
    ])
  ])
};

// <ul class="collection">
//     <li class="collection-item avatar">
//       <img src="images/yuna.jpg" alt="" class="circle">
//       <span class="title">Title</span>
//       <p>First Line <br>
//          Second Line
//       </p>
//       <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//     </li>
//     <li class="collection-item avatar">
//       <i class="material-icons circle">folder</i>
//       <span class="title">Title</span>
//       <p>First Line <br>
//          Second Line
//       </p>
//       <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//     </li>
//     <li class="collection-item avatar">
//       <i class="material-icons circle green">insert_chart</i>
//       <span class="title">Title</span>
//       <p>First Line <br>
//          Second Line
//       </p>
//       <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//     </li>
//     <li class="collection-item avatar">
//       <i class="material-icons circle red">play_arrow</i>
//       <span class="title">Title</span>
//       <p>First Line <br>
//          Second Line
//       </p>
//       <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
//     </li>
//   </ul>
