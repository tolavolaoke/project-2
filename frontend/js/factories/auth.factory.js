/* global firebase*/

function AuthRun() {

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDFM2cZsHoqLdcm1z3NSrXLKb1H4Kvy-58',
    authDomain: 'sg-project-3-1491399141339.firebaseapp.com',
    databaseURL: 'https://sg-project-3-1491399141339.firebaseio.com',
    projectId: 'sg-project-3-1491399141339',
    storageBucket: 'sg-project-3-1491399141339.appspot.com',
    messagingSenderId: '1093614402207'
  };


  firebase.initializeApp(config);
}

function AuthFactory($firebaseAuth) {
  return $firebaseAuth();
}
AuthFactory.$inject = ['$firebaseAuth'];


angular
  .module('FamilyTreeApp')
  .run(AuthRun)
  .factory('AuthFactory', AuthFactory);
