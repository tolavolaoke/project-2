// function MapController(MapFactory) {
//   var controller = this;
//
//   function init() {
//     console.log('MapController', controller);
//     controller.placeName = '';
//   }
//
//   controller.selectLocation = function (place) {
//     console.log('selected place:', place);
//   };
//
//   controller.getPlaceDetails = function () {
//     MapFactory.getAll(controller.placeName).then(
//       (success) => {
//         controller.placeName = '';
//         controller.maps = success.data;
//         console.log('Got maps:', success);
//       },
//       (error) => {
//         console.warn('Could not get maps', error);
//       }
//     );
//   };
//   init();
// }
//
// MapController.$inject = ['MapFactory'];
//
// angular
//   .module('FamilyTreeApp')
//   .controller('MapController', MapController);
