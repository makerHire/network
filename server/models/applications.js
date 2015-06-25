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

  retrieveWithCompany: function (user, callback) {

  return db.select('*').from('applications').join('companies', function() {
    this.on('companies.id', '=', 'applications.company_id')}).join('titles',
      function(){ this.on('titles.id', '=', 'applications.title_id')})
    .then(function(rows){
      if(Array.isArray(rows)){
      var filteredRows = rows.filter(function(obj){
        return user.uid === obj.user_id;
        })
      }
     return (rows.length === 0) ? callback({title:'Apps with companies will be here, joined'}) : callback(filteredRows)
  })
},


retrieveAllWithCompany: function (callback) {

  return db.select('*').from('applications').join('companies', function() {
    this.on('companies.id', '=', 'applications.company_id')}).join('titles',
      function(){ this.on('titles.id', '=', 'applications.title_id')}).join('users', function() {
        this.on('users.uid', '=', 'applications.user_id')
      })
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Apps with companies will be here, joined'}) : callback(rows)
  })
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