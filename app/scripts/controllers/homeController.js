(function(velocity) {
    'use strict';
    function HomeController($log, $state, $element) {
        var vm = this;

        function initiateEntrance() {
          var wedge = $('#wedge');
          wedge.velocity({
            backgroundPositionX: -200,
            backgroundPositionY: -580
          }, {
            easing: [5],
            duration: 2000
          });
          wedge.velocity({
            translateX: '+=5px',
            backgroundPositionY: -660
          }, {
            easing: [2],
            duration: 500,
            loop: 5
          })
        }
        initiateEntrance();
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();
