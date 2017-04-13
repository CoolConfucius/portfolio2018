'use strict'; 

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', templateUrl: './html/home.html' })
    .state('resume', {url: '/resume', templateUrl: './html/resume.html' })
    .state('blog', {url: '/blog', templateUrl: './html/blog.html' })
  
  $urlRouterProvider.otherwise('/'); 
});

app.controller('mainCtrl', function($scope) {

  console.log("mainCtrl");
  $scope.lightsout = false; 
  $scope.toggle = function(){
    $scope.lightsout = !$scope.lightsout; 
  }

  $scope.hidedeets = true; 
  $scope.toggledeets = function(){
    $scope.hidedeets = !$scope.hidedeets; 
  }

  $scope.allprojects = false; 
  $scope.toggleprojects = function(){
    $scope.allprojects = !$scope.allprojects; 
  }
  
}); 