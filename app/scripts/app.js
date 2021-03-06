(function () {
    'use strict';
    var dgmApp = angular.module('dgmApp', ['ngAnimate', 'ngResource', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.router']);
    dgmApp.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', { // Home
            url: '/home',
            templateUrl: './views/home.html',
            data: { pageTitle: 'Welcome' },
            controller: 'homeCtrl',
            controllerAs: 'ctrl'
        }).state('github', { // Github demo
            url: '/github-demo',
            templateUrl: './views/github/github-demo.html',
            data: { pageTitle: 'Github Demo' },
            controller: 'githubCtrl',
            controllerAs: 'ctrl'
        })
        .state('customers', {
            url: '/customers',
            templateUrl: './views/customers/customers.html',
            data: { pageTitle: 'Customers'},
            controller: 'customersListCtrl',
            controllerAs: 'ctrl'
        })
        .state('viewCustomer', {
            url: '/customers/:id/view',
            templateUrl: './views/customers/customer-view.html',
            data: { pageTitle: 'Customers'},
            controller: 'customersViewCtrl',
            controllerAs: 'ctrl'
        })
        .state('editCustomer', {
            url: '/customers/:id/edit',
            templateUrl: './views/customers/customer-edit.html',
            data: { pageTitle: 'Customers - Edit'},
            controller: 'customersEditCtrl',
            controllerAs: 'ctrl'
        })
        .state('createCustomer', {
            url: '/customers/create',
            templateUrl: './views/customers/customer-create.html',
            data: { pageTitle: 'Customers - Create'},
            controller: 'customersCreateCtrl',
            controllerAs: 'ctrl'
        })
        .state('secrets', {
            url: '/secrets',
            templateUrl: './views/partials/secrets.html',
            data: { pageTitle: 'Secrets' },
            controller: 'homeCtrl',
            controllerAs: 'ctrl'
        })
        $urlRouterProvider.otherwise('/home');
    });

})();
