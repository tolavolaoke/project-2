function RelativeController($state, $stateParams, RelativeFactory) {
  var controller = this;


  controller.getRelative = function () {
    var relativeId = $stateParams.relativeId;

    RelativeFactory.getOne(relativeId).then(
        function success(response) {
          controller.selectedRelative = response.data;
        },
        function error(error) {
          console.warn('Error getting relative:', error);
        }
      );
  };


  controller.addRelative = function() {
    console.log('addRelative()');
    RelativeFactory.createOne(controller.newRelative).then(
        function sucess(response) {
          console.log('Created new relative:', response);
          $state.go('create');
        },
        function error(error) {
          console.warn('Error creating relative:', error);
        }
      );
  };



  controller.editRelative = function (RelativeId) {
    $state.go('edit', { RelativeId: RelativeId });
  };

  controller.updateRelative = function () {
    RelativeFactory.editOne(controller.selectedRelative.relative).then(
        function success(response) {
          console.log('review updated:', response);
          $state.go('home');
        },
        function error(error) {
          console.warn('Error updating relative:', error);
        }
      );
  };


  function init() {
    console.log('RelativeController:', controller);
    controller.selectedRelative = undefined;
    controller.allRelatives = [];
    controller.newRelative = {};

    RelativeFactory.getAll().then(
      function success(response) {
        controller.allRelatives = response.data;
        console.log('Got Relatives', controller.allRelatives);
      },
      function error(error) {
        console.warn('Could not get relatives', error);
      }
    );
  }

  init();
}



RelativeController.$inject = ['$state', '$stateParams', 'RelativeFactory'];

angular
  .module('FamilyTreeApp')
  .controller('RelativeController', RelativeController);
