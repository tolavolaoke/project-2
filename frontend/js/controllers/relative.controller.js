// we are passing a parameter called Relativefactory to the duckcontroller
// put in the function 'RelativeController ()' whatever needs to be defined

function RelativeController($state, $stateParams, RelativeFactory) {
  var controller = this;


  controller.getRelative = function () {
    var relativeId = $stateParams.firebaseUserId;

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
    // controller.countries = ['usa', 'uk', 'dubai'];

    RelativeFactory.getAll($stateParams.firebaseUserId).then(
      function success(response) {
        controller.relatives = response.data;
        console.log('Got Relatives', controller.allRelatives);
      },
      function error(error) {
        console.warn('Could not get relatives', error);
      }
    );
  }

  init();
}

// ```RelativeFactory.getAll($stateParams.firebaseUserId).then(
//       (success) => {
//         controller.relatives = success.data.relatives;
//         console.log('success.data:', success.data);
//       },
//       (error) => {
//         console.warn('Could not get list of relatives', error);
//       }
//     );```



RelativeController.$inject = ['$state', '$stateParams', 'RelativeFactory'];

angular
  .module('FamilyTreeApp')
  .controller('RelativeController', RelativeController);
