var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var School = module.exports = {

  find: function (uid) {
    return db('schools').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('schools').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('schools').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },


  retrieveAll: function (callback) {
    return db('schools').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'schools WIll Be here!!!!'}) : callback(rows)
    })
  },

  updateOrCreate: function (attrs) {
    return School.update(attrs).catch(School.create.papp(attrs))
  }
}
