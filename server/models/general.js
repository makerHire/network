var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var General = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db(attrs.table).insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db(attrs.table).update(attrs.values).where({ uid: attrs.values.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Companies.update(attrs).catch(Companies.create.papp(attrs))
  },

  retrieveAll: function (attrs, callback) {
    return db(attrs.table).select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title: attrs.table + 'WIll Be here!!!!'}) : callback(rows)
    })
  },

  destroy: function (uid) {
    return db('Companies').where({ uid: uid }).delete()
  }

}
