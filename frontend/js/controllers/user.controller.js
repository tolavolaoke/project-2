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
        controller.markers = controller.convertRelatives();
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
        console.log('Got saved relatives', controller.relatives);
        controller.markers = controller.convertRelatives();
      },
      (error) => {
        console.warn('Could not get saved relatives', error);
      }
    );
  };

  controller.convertRelatives = () => {
    return controller.relatives.map((rel, i) => {
      return {
        coords: {
          latitude: rel.lat,
          longitude: rel.lng
        },
        id: i
      };
    });
  }

// GOOGLE PLACES --------------------------------------------------------
  $scope.$on('gmPlacesAutocomplete::placeChanged', () => {
    var location = controller.autocomplete.getPlace().geometry.location;
    controller.lat = location.lat();
    controller.lng = location.lng();
    console.log(controller.lat, controller.lng);

    $scope.$apply();
  });


// // GOOGLE MARKER -------------------------------------------------------
//   $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//    $scope.markers = [];
//
//    var infoWindow = new google.maps.InfoWindow();
//
//    var createMarker = function (info){
//
//        var marker = new google.maps.Marker({
//            map: $scope.map,
//            position: new google.maps.LatLng(info.lat, info.long),
//            title: info.city
//        });
//   google.maps.event.addListener(marker, 'click', function(){
//            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//            infoWindow.open($scope.map, marker);
//        });
//
//        $scope.markers.push(marker);
//
//    }
//    for (i = 0; i < cities.length; i++){
//        createMarker(cities[i]);
//    }
//
//    $scope.openInfoWindow = function(e, selectedMarker){
//        e.preventDefault();
//        google.maps.event.trigger(selectedMarker, 'click');
//    }
//
// });


// INIT FUNCTIONS -----------------------------------------------------
  function init() {
    controller.relatives = [];
    controller.relativeOptions = ['brother', 'sister', 'mother', 'father', 'step father', 'step mother', 'grand mother', 'grand father', 'daughter', 'son', 'step brother', 'step sister'];
    controller.lat = undefined;
    controller.lng = undefined;
    controller.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    controller.markers = [];
    if ($stateParams.firebaseUserId) controller.getSavedRelatives();
  }

  init();

}



UserController.$inject = ['$stateParams', 'UserFactory', '$scope'];

angular
  .module('FamilyTreeApp')
  .controller('UserController', UserController);
