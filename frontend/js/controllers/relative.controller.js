// function RelativeController($state, $stateParams, RelativeFactory) {
  function RelativeController() {
    var controller = this;


    function init() {
      console.log(controller);
      controller.Relatives = ['mum','dad','sister'];

      //
      // RelativeFactory.getAll().then(
      // function success(response) {
      //   controller.allRelatives = response.data;
      // },
      // function error(error) {
      //   console.log('Error getting Relatives:', error);
      // }
    // );
    }
    init();
  }


  angular
  .module('FamilyTreeApp')
  .controller('RelativeController', RelativeController);
