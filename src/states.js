module.exports = ['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
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
          controller: 'homeCtrl as Home'
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
          controller: 'scheduleCtrl as Schedule'
        }
      },
      data: {
        pageTitle: 'Schedule'
      }
    });
}];