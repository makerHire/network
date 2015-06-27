var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Titles = module.exports = {

	find: function (uid) {
    return db('titles').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('titles').insert(attrs).return(attrs)
  },

  retrieveAll: function (callback) {
    return db('titles').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'titles WIll Be here!!!!'}) : callback(rows)
    })
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    console.log(attrs.uid)
    return db('titles').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },
  
  updateOrCreate: function (attrs) {
    return Titles.update(attrs).catch(Titles.create.papp(attrs))
  }
}