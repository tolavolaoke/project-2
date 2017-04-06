function RelativeFactory($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `/api/relatives`
      });
    }
  };
}
RelativeFactory.$inject = ['$http'];

angular
  .module('FamilyTreeApp')
  .factory('RelativeFactory', RelativeFactory);
