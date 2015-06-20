var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
  // var studentInfo = m.prop([]);

  // function getStudentInfo(){
  //   //Still need to make get request work.  CORS error
  //   m.request({ method: 'GET', url: 'localhost:4000/me', 'Content-Type', "application/json"}).then(studentInfo);
  // };
  // getStudentInfo();
  // console.log(getStudentInfo)
}

exports.view = function (ctrl, studentInfo) {
  // console.log(studentInfo);
  return m('div.stud', 'studentInfo')
}