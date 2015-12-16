require('angular');
require('angular-ui-router');
var HomeCtrl = require('./states/home/homeCtrl');
var amUpdateTitle = require('./components/amUpdateTitle/amUpdateTitle');

angular.module('am.fest', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('Base', {
      abstract: true,
      views: {
        'nav@' : {
          templateUrl: 'components/amNav/amNav.html',
        },
      }
    })
    .state('Home', {
      url: '/',
      parent: 'Base',
      views: {
        'main@': {
          templateUrl: 'states/home/home.html',
          controller: HomeCtrl,
          controllerAs: 'Home'
        }
      },
      data: {
        pageTitle: 'Home'
      }
    })
    .state('Schedule', {
      url: '/schedule',
      parent: 'Base',
      views: {
        'main@': {
          templateUrl: 'states/schedule/schedule.html',
        }
      },
      data: {
        pageTitle: 'Schedule'
      }
    });
})
.directive('amUpdateTitle', ['$rootScope', '$timeout', amUpdateTitle]);