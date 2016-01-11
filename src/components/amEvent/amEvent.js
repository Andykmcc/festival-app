require('angular');

module.exports = angular.module('am.fest')
.directive('amEvent', [function() {
  return {
    restrict: 'E',
    templateUrl: './components/amEvent/amEvent.html',
    scope: {
      event: '='
    },
    controller: function () {
      var Event = this;

      Event.showActs = false;

      Event.toggleActs = function () {
        Event.showActs = !Event.showActs;
      }
    },
    bindToController: true,
    controllerAs : 'Event'
  };
}]);
