(function ()
{
  'use strict';
  angular.module('myFirstapp', [])

  .controller('MyFirstController', function ($scope) {
    $scope.name  = "Jithu";
    $scope.sayHello = function()
    {
      return "Hello sudesh";
    }

});

})();
