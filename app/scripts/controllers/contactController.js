(function() {
    'use strict';
    function ContactController ($state, $rootScope) {
         var vm = this;
         console.log('Contact Controller', $state.current.data.pageTitle);

         vm.something = 'something2';
    }

    angular.module('dgmApp').controller('contactCtrl', ContactController);
}());
