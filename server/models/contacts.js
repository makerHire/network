var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var contacts = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('contacts').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('contacts').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return contacts.update(attrs).catch(contacts.create.papp(attrs))
  },

  retrieveAll: function (callback) {
    return db('contacts').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'contacts WIll Be here!!!!'}) : callback(rows)
    })
  },

  destroy: function (uid) {
    return db('contacts').where({ uid: uid }).delete()
  }

}

