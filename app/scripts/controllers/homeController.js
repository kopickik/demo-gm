(function(velocity) {
    'use strict';
    function HomeController($log, $state, $element) {
        var vm = this;

        // vm.moveWedge = function() {
        //   const wedge = $('.wedge');
        //   return wedge.velocity({
        //       backgroundPositionX: '348px',
        //       backgroundPositionY: '698px',
        //       translateY: 40}, 5000);
        // }
        // vm.moveWedge('.wedge')
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();
