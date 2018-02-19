(function () {
  'use strict';

  function githubCtrl($scope, $http, $timeout, AlertsService) {
    $scope.$watch('ghuser', function () {
      fetch()
    })

    $scope.ghuser = 'fat'

    function fetch() {
      if ($scope.ghuser.length) {
        $http.get(`https://api.github.com/users/${$scope.ghuser}/repos`)
        .then(function (resp) {
          $scope.repos = resp.data
        }, function(resp) {
          $scope.repos = resp.data || `Request failed.`
          AlertsService.add('warning', resp.status + resp.statusText, 'exclamation-circle', 1000)
        })
      } else {
        return `Nothing to fetch.`
      }
    }

    $scope.update = function(ghuser) {
      $scope.ghuser = ghuser.owner.login
    }

  }

  angular.module('dgmApp').controller('githubCtrl', githubCtrl);
})();
