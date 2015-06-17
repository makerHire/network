var m = require('mithril')

var user = null

exports.currentUser = function () {
  // TODO: Cache for X amount of time
  return m.request({ method: 'GET', url: '/me' })
    .then(function (response) {
      return response.user
    })
}

exports.signOut = function () {
  return m.request({ method: 'POST', url: '/signout' })
}
