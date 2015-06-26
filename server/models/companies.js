var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Companies = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('companies').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('companies').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Companies.update(attrs).catch(Companies.create.papp(attrs))
  },

  retrieve: function (callback, attrs) {
    return db().select('*').where({id: attrs.id})
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'companies WIll Be here!!!!'}) : callback(rows)
    })
  },

  retrieveAll: function (callback) {
    var j = 'companies'
    return db(j).select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'companies WIll Be here!!!!'}) : callback(rows)
    })
  },


  retrieveOne: function(callback, id){
    return db('companies').select('*').where( {id: id})
    .then(function(row){
     return callback(row);
    })
  },

  destroy: function (uid) {
    return db('Companies').where({ uid: uid }).delete()
  }

}

