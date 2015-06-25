var User       = require('../models/user')
var Group      = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Applications = require('../models/applications')
var Utils      = require('./utils')

exports.mount = function (app) {


  app.get('/API/applications', function(req, res){
    Applications.retrieveAll(function(x){res.send({Applications: x})
    })
  });

  app.post('/API/applications', function(req, res){
    if (!req.body) return res.sendStatus(400)
    var newValues = Applications.updateOrCreate(req.body)
    res.send(req.body)
  });

  app.get('/API/appswithcompanies', function(req,res){
    if (!req.body) return res.sendStatus(400);
      Applications.retrieveWithCompany(req.user, function(x){res.send({Applications: x})
    })
  });


  app.get('/API/allApps', function(req,res){
    if (!req.body) return res.sendStatus(400);
      Applications.retrieveAllWithCompany(function(x){res.send({Applications: x})
    })
  });

}

