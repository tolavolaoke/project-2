// function MapFactory($http) {
//   return {
//     getAll: function(placeName) {
//       var placeString = placeName.split(' ').join('+');
//       return $http({
//         method: 'GET',
//         url: `api/maps?place=${placeString}`
//       });
//     }
//   };
// }
// MapFactory.$inject = ['$http'];
//
// angular
//   .module('FamilyTreeApp')
//   .factory('MapFactory', MapFactory);
