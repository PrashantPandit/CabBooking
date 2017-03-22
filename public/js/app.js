'use strict';

window.$ = window.jQuery = require('jquery');



var angular = require('angular');
              require('angular-route');

var app = angular.module('myApp', ['ngRoute']);


require('../css/foundation.css');
require('../css/app.css');
require('./controller');
require('./service');

require('./vendor/foundation.js');
require('./vendor/foundation.min.js');
$(document).foundation();
require('./vendor/what-input.js');




app.config(function ($routeProvider) {

  $routeProvider

  .when("/home", {
    templateUrl: 'views/home.html',
    controller: 'HomeController',
    })

  .when("/admin", {
    templateUrl: 'views/admin.html',
    controller: 'AdminController',
    })

  .otherwise({
    redirectTo : '/home',
  });

});



if (module.hot) {
      module.hot.accept();
}
