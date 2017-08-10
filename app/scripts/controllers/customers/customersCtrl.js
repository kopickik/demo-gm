(function () {
  'use strict';
  function customersListCtrl($scope, $state, popupService, Customer, AlertsService) {
    $scope.customers = Customer.query(function (data) {
      AlertsService.add('info', 'Fetched customers.', 'cubes', 1500)
    }, function (err) {
      AlertsService.add('warning', err, 'exclamation-circle')
    });

    $scope.showFullDetails = function () {
      _.map($scope.customers, function (customer) {
        customer.customerFull = $scope.fullDetails
      })
    }

    $scope.deleteCustomer = function (customer) {
      if (popupService.showPopup('Really delete this?')) {
        customer.$remove(function (resp) {
          AlertsService.add('success', resp.message, 'cut', 2000)
          $state.go('home')
        });
      }
    };
  }

  function customersViewCtrl($scope, $state, $stateParams, Customer, AlertsService) {
    const customer = Customer.get({ customerId: $stateParams.id }, function(resp) {
      $scope.customer = customer
      $state.current.data.pageTitle = `Viewing ` + $scope.customer.firstName
    }, function (err) {
      AlertsService.add('danger', err.statusText, 'exclamation-circle')
    })
  }

  function customersCreateCtrl($scope, $state, Customer, AlertsService) {
    $scope.customer = new Customer()
    $scope.phoneRegex = /(?:(\+?\d{1,3}) )?(?:([\(]?\d+[\)]?)[ -])?(\d{1,5}[\- ]?\d{1,5})/g
    $scope.phoneMaxLength = 16

    $scope.addCustomer = function () {
      $scope.customer.$save(function (resp) {
        // success callback
        AlertsService.add('success', resp.message, 'thumbs-up', 1500)
        $state.go('customers', resp)
      }, function (resp) {
        AlertsService.add('warning', resp.message, 'exclamation-circle', 1500)
      });
    };
  }

  function customersEditCtrl($scope, $state, $stateParams, Customer, AlertsService) {
    $scope.loadCustomer = function() {
      Customer.get({customerId: $stateParams.id})
      .$promise.then(function(customer) {
        $scope.customer = customer
        $state.current.data.pageTitle = `Editing ` + $scope.customer.firstName
      }, function (error) {
        AlertsService.add('danger', error.statusText, 'exclamation-triangle')
      })
    }

    $scope.loadCustomer();
    $scope.phoneRegex = /(?:(\+?\d{1,3}) )?(?:([\(]?\d+[\)]?)[ -])?(\d{1,5}[\- ]?\d{1,5})/g
    $scope.phoneMaxLength = 16

    $scope.updateCustomer = function () {
      $scope.customer.$update({customerId: $stateParams.id}, function (resp) {
        if (resp.status === 404) {
          AlertsService.add('error', resp.data.messages, 'exclamation-circle', 1500)
        }
        AlertsService.add('success', resp.message, 'thumbs-up', 1500)
        $state.go('customers')
      })
    }
  }

  angular.module('dgmApp').controller('customersCreateCtrl', customersCreateCtrl);
  angular.module('dgmApp').controller('customersListCtrl', customersListCtrl);
  angular.module('dgmApp').controller('customersViewCtrl', customersViewCtrl);
  angular.module('dgmApp').controller('customersEditCtrl', customersEditCtrl);
})();
