var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Membership = require('../models/membership')
var Interviews = require('../models/interviews')
var General    = require('../models/general')
var Utils      = require('./utils')



exports.mount = function (app) {

	app.get('/API/interviews', function(req, res){
		Interviews.retrieveAll(function(x){res.send({Interviews: x})
    })
  });

	app.post('/API/interviews', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Interviews.updateOrCreate(req.body)
		res.send(req.body)
	});
}

