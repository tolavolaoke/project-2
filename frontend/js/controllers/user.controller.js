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
        console.log(controller.relatives);
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

  controller.getSavedRelatives = () => {
    UserFactory.getSavedRelatives($stateParams.firebaseUserId).then(
      (success) => {
        controller.relatives = success.data.relatives;
        console.log('Got saved relatives', success.data.relatives);
      },
      (error) => {
        console.warn('Could not get saved relatives', error);
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
    controller.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  }

  init();

}



UserController.$inject = ['$stateParams', 'UserFactory', '$scope'];

angular
  .module('FamilyTreeApp')
  .controller('UserController', UserController);
