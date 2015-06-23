var User       = require('../models/user')
var Groups     = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Companies  = require('../models/companies')
var Questions  = require('../models/questions')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/School', function(req, res){
		School.retrieveAll(function(x){res.send({School: x})
    })
  });


	app.post('/API/School', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = School.updateOrCreate(req.body)
		res.send(req.body)
	});

}

