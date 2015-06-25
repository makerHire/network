var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Companies  = require('../models/companies')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/jobs', function(req, res){
		Jobs.retrieveAll(function(x){res.send({Jobs: x})
    })
  });


	app.post('/API/jobs', function(req, res){
		console.log(req.body, "jobsAPI")
		if (!req.body) return res.sendStatus(400)
			var newValues = Jobs.updateOrCreate(req.body)
		res.send(req.body)
	});

}

