
angular.module('starter')
 .directive('chatButton', function () {
    return {
      restrict: 'E',
      templateUrl: '../../templates/directives/chat-button.html'
    };
  });