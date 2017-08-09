(function(velocity) {
    'use strict';
    function HomeController($log, $state, $element, $scope) {
        var vm = this;

        function walkEast() {
          var wedge = $('#wedge'),
              stage = $('#stage');

          wedge.velocity({
            backgroundPositionX: -200,
            backgroundPositionY: -580
          }, {
            easing: [5],
            duration: 2000
          });
          wedge.velocity({
            backgroundPositionY: -660
          }, {
            easing: [2],
            duration: 400,
            loop: 5
          });
          stage.velocity({
            translateX: '+=216px'// 36 x 5 steps + 36
          }, {
            easing: 'easeInOutBounce',
            duration: 4000,
            delay: 2000
          });
          wedge.velocity({
            backgroundPositionX: 0,
            backgroundPositionY: -580
          }, [1])
        }

        function initiateEntrance() {
          walkEast()
        }
        $scope.walkEast = walkEast;
        initiateEntrance();
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();
