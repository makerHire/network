var User       = require('../models/user')
var Groups     = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Phases     = require('../models/phases')
var Companies  = require('../models/companies')
var Questions  = require('../models/questions')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/Questions', function(req, res){
		Questions.retrieveAll(function(x){res.send({Questions: x})
    })
  });


	app.post('/API/Questions', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Questions.updateOrCreate(req.body)
		res.send(req.body)
	});

}

