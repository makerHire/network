var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Utils      = require('./utils')

exports.mount = function (app) {

	app.get('/API/jobs', function(req, res){
		Jobs.retrieve(function(x){res.send({Jobs: x})
    })
  });


	app.post('/API/addJob', function(req, res){
		utils.collectData(req, function(data){
			res.send(Jobs.updateOrCreate(data))
		});
	});

}

