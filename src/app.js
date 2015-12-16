var angular = require('angular');
require('angular-ui-router');

angular.module('am.fest', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'states/home/home.html'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'states/schedule/schedule.html'
    });
});