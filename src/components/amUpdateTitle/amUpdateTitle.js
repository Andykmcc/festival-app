// directiv to update title of page on state change
module.exports = function($rootScope, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      function updateTitle (event, toState) {
        $timeout(function() {
          element.text(toState.data.pageTitle);
        });
      }

      $rootScope.$on('$stateChangeSuccess', updateTitle);
    }
  };
}