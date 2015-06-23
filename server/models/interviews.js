var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Interviews = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('interviews').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('interviews').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Interviews.update(attrs).catch(Interviews.create.papp(attrs))
  },

  retrieveAll: function (callback) {
    return db('interviews').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Interviews WIll Be here!!!!'}) : callback(rows)
    })
  },

  destroy: function (uid) {
    return db('interviews').where({ uid: uid }).delete()
  }

}

