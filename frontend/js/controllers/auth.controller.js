function AuthController($state, AuthFactory) {
  var controller = this;

  function resetCredentials(){
    controller.email = null;
    controller.pasword = null;
  }


  controller.createUser = function (){
    controller.error = null;
    AuthFactory.$createUserWithEmailAndPassword(controller.email, controller.password).then(
      (firebaseUser) => { //arrow function just missing the word function before (firebaseUser)
        console.log('firebaseUser:', firebaseUser);
        resetCredentials();
        $state.go('home');
      },

      (error) => { //another arrow function
        controller.error = error; //this error varibale is available onto thhe controller
        console.warn('could not create user with email or password:', error);
        resetCredentials();
      }
    );
  };

// SIGN IN
  controller.signIn = () => {
    controller.error = null;
    AuthFactory.$signInWithEmailAndPassword(controller.email, controller.password).then(
      () => {
        resetCredentials();
        $state.go('home');
      },

    (error) => { //another arrow function
      controller.error = error; //this error varibale is available onto the controller
      console.warn('could not create user with email or password:', error);
      resetCredentials();
    }
  );
  };

// SIGN OUT
  controller.signOut = () => {
    AuthFactory.$signOut();
    $state.go('home');
  };



  function init() {
    controller.user = null;
    controller.error = null;
    controller.email = '';
    controller.password = '';
    AuthFactory.$onAuthStateChanged(function (user) {
      console.log('auth state changed: user:', user);
      controller.user = user;
    });
  }

  init();
}

AuthController.$inject = ['$state', 'AuthFactory'];

angular
  .module('FamilyTreeApp')
  .controller('AuthController', AuthController);