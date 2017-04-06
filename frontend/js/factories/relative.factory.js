function RelativeFactory($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `/api/relatives`
      });
    },

    createOne: function (newRelative) {
      return $http({
        method: 'POST',
        url: `/relatives`,
        data: newRelative
      });
    }

  };
}






RelativeFactory.$inject = ['$http'];

angular
  .module('FamilyTreeApp')
  .factory('RelativeFactory', RelativeFactory);
