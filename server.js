var logger = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');

var DriverCrud = require('./routes/driver-CRUD');


var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/cabr/', DriverCrud)


var mongo = require('mongodb');
var mongoose = require('mongoose');
var dbHost = 'mongodb://localhost:27017/cabReg';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Entered into DB");
});


(function(){

   var webpack = require('webpack');
   var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config' );
   var compiler = webpack(webpackConfig);


   app.use(require("webpack-dev-middleware")(compiler, {
     publicPath: webpackConfig.output.publicPath,
     headers: {"X-custom-Webpack-Header" : "yes"},
     stats:{
       colors: true
     }

}));

app.use(require("webpack-hot-middleware")(compiler,{
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

})();


var server = app.listen(8080, function () {
  console.log('this is the stop:8080')
});
