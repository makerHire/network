var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Membership = require('../models/membership')
var Utils      = require('./utils')



exports.mount = function (app) {

	app.get('/API/membership', function(req, res){
		Membership.retrieveAll(function(x){res.send({Membership: x})
    })
  });


	app.post('/API/membership', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Membership.updateOrCreate(req.body)
		res.send(req.body)
	});

}

