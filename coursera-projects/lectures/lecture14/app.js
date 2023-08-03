(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout){

      $scope.upCounter = function(){
        $timeout(function(){
          $scope.counter++;
          console.log("Counter incremented!");
        }, 2000);
      };

      // $scope.upCounter = function(){
      //   setTimeout(function(){
      //     $scope.$apply(function(){
      //       $scope.counter++;
      //       console.log("Counter incremented!");
      //     });
      //   },2000);
      // };

      // $scope.upCounter = function(){
      //   setTimeout(function(){
      //     $scope.counter++;
      //     console.log("Counter incremented!");
      //     $scope.$digest();
      //   },2000);
      // };

      // $scope.$watch(onceCounter, function(newValue, oldValue){
      //   console.log("onceCounter old value: ", oldValue);
      //   console.log("onceCounter new value: ", newValue);
      // });

      // $scope.$watch(counter, function(newValue, oldValue){
      //   console.log("counter old value: ", oldValue);
      //   console.log("counter new value: ", newValue);
      // });
    };
  
})();
