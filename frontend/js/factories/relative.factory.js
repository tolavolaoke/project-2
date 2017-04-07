function RelativeFactory($http) {
  return {

    getAll: function() {
      return $http({
        method: 'GET',
        url: `/api/relatives`
      });
    },

    getOne: function (relativeId) {
      return $http({
        method: 'GET',
        url: `/relatives/${relativeId}`
      });
    },

    createOne: function (newRelative) {
      return $http({
        method: 'POST',
        url: `/relatives`,
        data: newRelative
      });
    },

    editOne: function (editedRelative) {
      return $http({
        method: 'PATCH',
        url: `/relatives/${editedRelative._id}`,
        data: editedRelative
      });
    }
  };
}






RelativeFactory.$inject = ['$http'];

angular
  .module('FamilyTreeApp')
  .factory('RelativeFactory', RelativeFactory);
