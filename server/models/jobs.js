var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Jobs = module.exports = {

	find: function (uid) {
    return db('jobs').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('jobs').insert(attrs).return(attrs)
  },

  retrieve: function (callback) {
    return db('jobs').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Jobs WIll Be here!!!!'}) : callback(rows)
    })
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    console.log(attrs.uid)
    return db('jobs').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },
  updateOrCreate: function (attrs) {
    return Jobs.update(attrs).catch(Jobs.create.papp(attrs))
  }

}