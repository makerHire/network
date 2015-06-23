var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Companies = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('Companies').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('Companies').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Companies.update(attrs).catch(Companies.create.papp(attrs))
  },

  destroy: function (uid) {
    return db('Companies').where({ uid: uid }).delete()
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

