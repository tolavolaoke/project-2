function RelativeController(RelativeFactory) {
  var controller = this;

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

RelativeController.$inject = ['RelativeFactory'];

angular
  .module('FamilyTreeApp')
  .controller('RelativeController', RelativeController);
