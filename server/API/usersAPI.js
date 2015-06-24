var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/users', function(req, res){
		User.retrieve(function(x){res.send({User: x})
    })
  });


	app.post('/API/users', function(req, res){

		if (!req.body) return res.sendStatus(400)
		var newValues = User.updateOrCreate(req.body)
		res.send(req.body)
	});

}

