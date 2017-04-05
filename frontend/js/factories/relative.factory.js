function RelativeFactory(API_URL, $http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: `${API_URL}/home`
      });
    },


angular
  .module('FamilyTreeApp')
  .factory('RelativeFactory', RelativeFactory);
