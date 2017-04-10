function UserController($stateParams, UserFactory) {
  var controller = this;

  controller.addRelative = () => {
    controller.newRelative = {
      firstName: controller.relativeFirstName,
      lastName: controller.relativeLastName,
      relation: controller.relation
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


  function init() {
    controller.relatives = [];
  }

  init();

}

UserController.$inject = ['$stateParams', 'UserFactory'];

angular
  .module('FamilyTreeApp')
  .controller('UserController', UserController);
