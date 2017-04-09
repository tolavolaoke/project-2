function UserFactory($http) {
  return {

    createOne: function (firebaseUserId) {
      return $http({
        method: 'POST',
        url: `/users`,
        headers: {firebaseUserId: firebaseUserId }
      });
    }

  };
}

angular
.module('FamilyTreeApp')
.factory('UserFactory', UserFactory);
