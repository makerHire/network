//
// Authentication with MakerPass
//
var passport = require('passport')
var MakerpassStrategy = require('passport-makerpass').Strategy
var Promise    = require('knex/node_modules/bluebird')
var User       = require('./models/user')
var Group      = require('./models/group')
var Membership = require('./models/membership')
var School     = require('./models/school')

exports.mount = function (app, host) {

  passport.use(new MakerpassStrategy({
      clientID: process.env.MAKERPASS_CLIENT_ID || 'eae6795ed5d6fe1fb29497641a083edb2c4fe242a233fc98138f7224177581e9',
      clientSecret: process.env.MAKERPASS_CLIENT_SECRET || 'c92309a053636df7b24e1672ce6190ef9c76bca9e5aebf1cb8847e70607b534f',
      callbackURL: host + '/auth/makerpass/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      importAuthData(profile).then(done.papp(null))
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user.uid)
  })

  passport.deserializeUser(function(id, done) {
    User.find(id)
      .then(done.papp(null))
      .catch(function (err) {
        if (err.message === 'not_found') {
          done(null, null)
        }
        else {
          done(err)
        }
      })
  })

  app.get('/auth/makerpass',
    passport.authenticate('makerpass'))

  app.get('/auth/makerpass/callback',
    passport.authenticate('makerpass', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/me')
    })

  app.get('/me', function (req, res) {
    res.send({ user: req.user})
  })

  app.post('/signout', function (req, res) {
    req.session = null
    res.send({})
  })

}

var importAuthData = module.exports.importAuthData = function (mks) {

  // These two can run in parallel
  var userPromise = importUser(mks)
  var schoolPromises = mks.schools.map(School.updateOrCreate)

  return Promise.all(schoolPromises).then(function() {
    return Promise.all( mks.memberships.map( getProp('group') ).map(Group.updateOrCreate) )
  })
  .then(function() {
    console.log(userPromise)
    return userPromise
  })
}

function importUser (mks) {
  return User.updateOrCreate({
    uid: mks.id,
    name: mks.name,
    email: mks.email,
    avatar_url: mks.avatar_url
  })
}
