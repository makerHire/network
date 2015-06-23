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


	app.get('/API/users', function(req, res){
		User.retrieve(function(x){res.send({User: x})
    })
  });


	app.post('/API/users', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		var newValues = User.updateOrCreate(req.body)
		res.send(req.body)
	});

}

