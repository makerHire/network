var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Titles     = require('../models/titles')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/titles', function(req, res){
		Titles.retrieveAll(function(x){res.send({Titles: x})
    })
  });


	app.post('/API/titles', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Titles.updateOrCreate(req.body)
		res.send(req.body)
	});

}

