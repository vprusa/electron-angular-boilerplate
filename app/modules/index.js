'use strict';

// node module in angular :)
var util = require('util');

angular.module('app')

.controller('indexController', function($scope, $location, $mdToast) {
  
  // shows how to use angular material service
  $mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));
  
  $scope.version = process.version;
  $scope.arch = process.arch;
    
  // Use location to change page instead of a href in the template  
  $scope.openMemory = function() {
    $location.path('/memory');
  };
})

.controller('memoryController', function($scope, $interval) {
  $interval(function() {
    $scope.memory = util.inspect(process.memoryUsage());
  }, 1000);    
});
