(function() {
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);
       
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function() {
            return "Yakov likes to eat";
        };

        $scope.feed = function() {
            $scope.stateOfBeing = "fed";
        };
    }


       

})();