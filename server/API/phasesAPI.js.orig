var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Phases     = require('../models/phases')
var Utils      = require('./utils')

var bodyParser = require('body-parser')

exports.mount = function (app) {

	var jsonParser = bodyParser.json()
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }));


	app.get('/API/phases', function(req, res){
		Phases.retrieve(function(x){res.send({Phases: x})
    })
  });


	app.post('/API/phases', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = Phases.updateOrCreate(req.body)
		res.send(req.body)
	});

}

