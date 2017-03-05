'use strict';

window.$ = window.jQuery = require('jquery');
require('bootstrap');

var angular = require('angular');
              require('angular-route');

var app = angular.module('cabReg', ['ngRoute']);

require('../css/app.css');

require('../css/app1.scss');

require('./controller');

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
    redirectTo : '/home'
  });

});


if (module.hot) {
      module.hot.accept();
}
