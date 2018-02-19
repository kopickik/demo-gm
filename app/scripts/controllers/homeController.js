(function(velocity) {
    'use strict';
    function HomeController($log, $state, $element, $scope) {
        var vm = this,
            wedge = $('#wedge'),
            stage = $('#stage');

        function stageInitialize() {
          stage.velocity({
            translateX: 0, translateY: 0
          }, 1)
        }

        function stageRight() {
          stage.velocity({
            translateX: '-=144px'
          }, { easing: 'linear', duration: 2500 });
        }

        function stageLeft() {
          stage.velocity({
            translateX: '+=144px'// 36 x 4 steps + 36
          }, { easing: 'linear', duration: 2500 });
        }

        function stageUp() {
          stage.velocity({
            translateY: '-=144px'// 36 x 4 steps + 36
          }, { easing: 'linear', duration: 2500 });
        }

        function stageDown() {
          stage.velocity({
            translateY: '+=144px'// 36 x 4 steps + 36
          }, { easing: 'linear', duration: 2500 });
        }

        function magitekInitialize() {
          wedge.velocity({
            scale: 2.8,
            backgroundPositionX: -200,
            backgroundPositionY: -580
          }, 1)
        }

        function magitekInitializeW() {
          wedge.velocity({
            scale: 2.8,
            backgroundPositionX: -160,
            backgroundPositionY: -580
          }, 1)
        }

        function walkLR() {
          wedge
          .velocity({backgroundPositionY: [-660]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          .velocity({backgroundPositionY: [-620]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          .velocity({backgroundPositionY: [-660]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          .velocity({backgroundPositionY: [-620]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          .velocity({backgroundPositionY: [-660]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          .velocity({backgroundPositionY: [-620]}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: [-580]}, {easing: [1], duration: 100})
          // stage.velocity({
          //   translateX: '+=144px'// 36 x 4 steps + 36
          // }, { easing: 'linear', duration: 2500 });
          .velocity({
            backgroundPositionX: 0,
            backgroundPositionY: -580
          }, 1)
        }

        function walkS() {
          wedge
          .velocity({backgroundPositionX: -80, backgroundPositionY: -620}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -40}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -80}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -40}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -80}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -40}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -80}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -40}, {easing: [1], duration: 300})
          .velocity({backgroundPositionX: -80}, {easing: [1], duration: 300})
          .velocity({
            backgroundPositionX: 0,
            backgroundPositionY: -580
          }, 1)
        }

        function walkN() {
          wedge
          .velocity({backgroundPositionX: -120, backgroundPositionY: -580}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -620}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -660}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -620}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -660}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -620}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -660}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -620}, {easing: [1], duration: 300})
          .velocity({backgroundPositionY: -660}, {easing: [1], duration: 300})
          .velocity({
            backgroundPositionX: 0,
            backgroundPositionY: -580
          }, 1)
        }

        function walkEast() {
          magitekInitialize()
          walkLR(stageLeft())
        }

        function walkWest() {
          magitekInitializeW()
          walkLR(stageRight())
        }

        function walkNorth() {
          magitekInitialize()
          walkN(stageUp())
        }

        function walkSouth() {
          walkS(stageDown())
        }

        function initiateEntrance() {
          stageInitialize()
          magitekInitialize()
          walkLR(stageLeft())
        }

        $scope.walkEast = walkEast;
        $scope.walkWest = walkWest;
        $scope.walkNorth = walkNorth;
        $scope.walkSouth = walkSouth;
        $scope.resetMagitek = stageInitialize;
        initiateEntrance();
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();
