var fs = require('fs')
var path = require('path')

var config = require('../knexfile.js')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(config[env])
var Promise = require('knex/node_modules/bluebird')

module.exports = knex;

knex.migrate.make('intialDB', ['../migrations/20150521143446_create_makerpass_tables.sql']) 



knex.deleteEverything = function () {
  return knex('memberships').truncate().then(function() {
    return Promise.all([
      knex('users').delete(),
      knex('groups').delete()
    ])
  })
}
