var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Companies  = require('../models/companies')
var Utils      = require('./utils')



exports.mount = function (app) {

	app.get('/API/companies', function(req, res){
		Companies.retrieveAll(function(x){res.send({Companies: x})
    })
  });


	app.post('/API/companies', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Companies.updateOrCreate(req.body)
		res.send(req.body)
	});
}

