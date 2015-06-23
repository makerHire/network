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

  retrieveAll: function (callback) {
    return db('companies').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'companies WIll Be here!!!!'}) : callback(rows)
    })
  },

  destroy: function (uid) {
    return db('Companies').where({ uid: uid }).delete()
  }

}

