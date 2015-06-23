var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Applications = module.exports = {

	find: function (uid) {
    return db('applications').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('applications').insert(attrs).return(attrs)
  },

  retrieveAll: function (callback) {
    return db('applications').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Applications WIll Be here!!!!'}) : callback(rows)
    })
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    console.log(attrs.uid)
    return db('applications').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },
  updateOrCreate: function (attrs) {
    return Applications.update(attrs).catch(Applications.create.papp(attrs))
  }

}