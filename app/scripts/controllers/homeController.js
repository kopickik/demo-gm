(function(velocity) {
    'use strict';
    function HomeController($log, $state, $element, $scope) {
        var vm = this,
            wedge = $('#wedge'),
            stage = $('#stage');

        function stageInitialize() {
          stage.velocity({
            translateX: 0
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

        function walk() {
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

        function walkEast() {
          magitekInitialize()
          walk(stageLeft())
        }

        function walkWest() {
          magitekInitializeW()
          walk(stageRight())
        }

        function initiateEntrance() {
          stageInitialize()
          magitekInitialize()
          walk(stageLeft())
        }

        $scope.walkEast = walkEast;
        $scope.walkWest = walkWest;
        $scope.resetMagitek = stageInitialize;
        initiateEntrance();
    }

    angular.module('dgmApp').controller('homeCtrl', HomeController);
})();
