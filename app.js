(function () {
'use strict'
  angular.module('myFirstApp',[])
  .controller('MyFirstController',function ($scope) {
    $scope.name='Jalaj Lasod';
    $scope.sayHello=function functionName() {
      return "Hello Coursera!"
    };

  });
})()
