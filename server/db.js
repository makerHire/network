var fs = require('fs')
var path = require('path')

var config = require('../knexfile.js')
var env = 'production'
var knex = require('knex')(config[env])
var Promise = require('knex/node_modules/bluebird')

module.exports = knex;

knex.deleteEverything = function () {
  return knex('memberships').truncate().then(function() {
    return Promise.all([
      knex('users').delete(),
      knex('groups').delete()
    ])
  })
}
