/* global firebase*/

function AuthRun() {

  // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyBl3JQydHJlsGyxA-hOlxh_xwviK-zqTgk",
    authDomain: "sg-project-3-cf32d.firebaseapp.com",
    databaseURL: "https://sg-project-3-cf32d.firebaseio.com",
    projectId: "sg-project-3-cf32d",
    storageBucket: "sg-project-3-cf32d.appspot.com",
    messagingSenderId: "645687905138"
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
