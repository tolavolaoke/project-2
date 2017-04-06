function RelativeController($state, RelativeFactory) {
  var controller = this;

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

  function init() {
    console.log('RelativeController:', controller);
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





RelativeController.$inject = ['$state', 'RelativeFactory'];

angular
  .module('FamilyTreeApp')
  .controller('RelativeController', RelativeController);
