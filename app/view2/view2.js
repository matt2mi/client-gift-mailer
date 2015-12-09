'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http', function($scope, $http) {
    $scope.users = [
        {
            name: '',
            mail: ''
        }
    ];
    $scope.currentUser = {
        name: '',
        mail: ''
    };

    $scope.submit = function() {
        $http.post('/email', $scope.users)
            .then(function() {
                console.log('success');
                $scope.resetForm();
            }, function() {
                console.log('error');
            });
    };

    $scope.resetForm = function() {
        $scope.currentUser.name = '';
        $scope.currentUser.mail = '';
    };
}]);