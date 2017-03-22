var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');


var DriverSchema = mongoose.Schema({
  cabrdriverName: String,
  cabrdriverAge: Number,
  cabrdriverGender:String,
  cabrdriverPhoneno: Number,
  cabrdriverLicenseno: Number,
  cabrdriverEmail:String

});

var Driver = mongoose.model('Driver', DriverSchema, 'driver');


router.get('/getCabr', function(req, res){
  console.log("Reached Driver Get Function on Server");
  Driver.find({}, function(err, docs){
    res.json(docs);
  });
});

router.get('/getCabr/:id', function(req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
    Driver.find({ _id: req.params.id }, function(err, docs) {
        res.json(docs);

    });
});

router.post('/addCabr', function(req, res){
  console.log(req.body);

  var dName = req.body.cabrdriverName;
  var dAge = req.body.cabrdriverAge;
  var dGender = req.body.cabrdriverGender;
  var dPhone = req.body.cabrdriverPhoneno;
  var dLin = req.body.cabrdriverLicenseno;
  var dEmail = req.body.cabrdriverEmail;

  var driver = new Driver ({
    cabrdriverName: dName,
    cabrdriverAge: dAge,
    cabrdriverGender: dGender,
    cabrdriverPhoneno: dPhone,
    cabrdriverLicenseno: dLin,
    cabrdriverEmail: dEmail

  });
  console.log(driver);
  driver.save(function(err, docs){
    if(err) throw err;
    console.log("Driver Details Saved");
    res.json(docs);
  });

})

router.delete('/deleteCabr/:id', function(req, res) {
    console.log("REACHED Delete FUNCTION ON SERVER");
    Driver.remove({ _id: req.params.id }, function(err, docs) {
        res.json(docs);
    });
})


module.exports = router;
