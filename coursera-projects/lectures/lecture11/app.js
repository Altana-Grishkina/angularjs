(function () {
  "use strict";

  angular
    .module("MsgApp", [])

    .controller("MsgController", MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', TruthFilter);

  MsgController.$inject = ["$scope", "lovesFilter"];
  function MsgController($scope, lovesFilter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = 0.45;
    $scope.sayMessage = function () {
      var msg = "Yakov likes to eat";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg = "Yakov likes to eat healthy at the night";
      msg = lovesFilter(msg);
      return msg;
    };

    // https://docs.angularjs.org/api/ng/filter/uppercase

    $scope.feed = function () {
      $scope.stateOfBeing = "fed";
    };
  }

  function LovesFilter(){
    return function(input) {
      input = input  || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter() {
    return function(input, target, replace) {
      input = input  || "";
      input = input.replace(target, replace);
      return input;
    }
  }

})();
