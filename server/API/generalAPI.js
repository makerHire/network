var User       = require('../models/user')
var Groups     = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Companies  = require('../models/companies')
var General    = require('../models/general')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/general', function(req, res){
		General.retrieveAll(function(x){res.send({Groups: x})
    })
  });

	app.post('/API/general', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Groups.updateOrCreate(req.body)
		res.send(req.body)
	});
}

