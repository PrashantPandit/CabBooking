var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');


var DriverSchema = mongoose.Schema({
  cabrdriverName: String,
  cabrdriverAge: String,
  cabrdriverGender:String
});

var Driver = mongoose.model('Driver', DriverSchema, 'driver');


router.get('/getCabr', function(req, res){
  console.log("Reached Driver Get Function on Server");
  Driver.find({}, function(err, docs){
    res.json(docs);
  });
});


router.post('/addCabr', function(req, res){
  console.log(req.body);

  var dName = req.body.cabrdriverName;
  var dAge = req.body.cabrdriverAge;
  var dGender = req.body.cabrdriverGender;

  var driver = new Driver ({
    cabrdriverName: dName,
    cabrdriverAge: dAge,
    cabrdriverGender: dGender
  });
  console.log(driver);
  driver.save(function(err, docs){
    if(err) throw err;
    console.log("Driver Details Saved");
    res.json(docs);
  });

})

module.exports = router;
