var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Contacts   = require('../models/contacts')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/contacts', function(req, res){
		Contacts.retrieveAll(function(x){res.send({Contacts: x})
    })
  });


	app.post('/API/contacts', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Contacts.updateOrCreate(req.body)
		res.send(req.body)
	});


	app.get('/API/contacts/:id', function(req, res){
		Contacts.retrieveOne(function(x){res.send({Contacts: x, Params: req.params})}, req.params.id
    )
  });

}


