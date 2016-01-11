require('angular');

module.exports = angular.module('am.fest')
.controller('homeCtrl', [function () {
  var Home = this;
  Home.title = 'Home';
}]);