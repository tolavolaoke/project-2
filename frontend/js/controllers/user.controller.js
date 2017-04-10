function UserController($stateParams, UserFactory, $scope) {
  var controller = this;

  controller.addRelative = () => {
    controller.newRelative = {
      firstName: controller.relativeFirstName,
      lastName: controller.relativeLastName,
      relation: controller.relation,
      lat: controller.lat,
      lng: controller.lng
    };

    controller.relatives.push(controller.newRelative);
    UserFactory.addRelative($stateParams.firebaseUserId, controller.relatives).then(
      (success) => {
        console.log('success:', success);
      },
      (error) => {
        console.warn('error:', error);
      }
    );
  };

  controller.getUser = () => {
    var firebaseUserId = $stateParams.firebaseUserId;
    UserFactory.getUser(firebaseUserId).then(
      (success) => {
        controller.userInfo = success.data;
        console.log('Got user', success.data);
      },
      (error) => {
        console.warn('Could not get user', error);
      }
    );
  };

  $scope.$on('gmPlacesAutocomplete::placeChanged', () => {
    var location = controller.autocomplete.getPlace().geometry.location;
    controller.lat = location.lat();
    controller.lng = location.lng();
    console.log(controller.lat, controller.lng);

    $scope.$apply();
  });

  function init() {
    controller.relatives = [];
    controller.relativeOptions = ['brother', 'sister', 'mum', 'dad', 'stepdad', 'step great grandmother'];
    controller.lat = undefined;
    controller.lng = undefined;
  }

  init();

}

UserController.$inject = ['$stateParams', 'UserFactory', '$scope'];

angular
  .module('FamilyTreeApp')
  .controller('UserController', UserController);
