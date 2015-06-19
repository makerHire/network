var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Phases = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('phases').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('phases').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Phases.update(attrs).catch(Phases.create.papp(attrs))
  },

  destroy: function (uid) {
    return db('phases').where({ uid: uid }).delete()
  }

}

function extractPhasesData (user_uid, oauthMem) {

    return {
        uid: oauthMem.uid,
        user_uid: user_uid,
        group_uid: oauthMem.group.uid,
        role: oauthMem.role
    }
}

