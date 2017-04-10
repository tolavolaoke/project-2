function UserFactory($http) {
  return {

    createOne: function (firebaseUserId) {
      return $http({
        method: 'POST',
        url: `/users`,
        headers: {firebaseUserId: firebaseUserId }
      });
    },
    
    getUser: function(firebaseUserId) {
      return $http({
        method: 'GET',
        url: `/users/${firebaseUserId}`
      });
    },

    addRelative: function (firebaseUserId, relatives) {
      return $http({
        method: 'PATCH',
        url: `/users/${firebaseUserId}`,
        data: relatives
      });
    }



  };
}

angular
.module('FamilyTreeApp')
.factory('UserFactory', UserFactory);
