// specifying and mapping a route aka state in the URL and an actual state

function MainRouter ($stateProvider, $urlRouterProvider, AuthFactory) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/states/signup.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/states/login.html'
    })
    .state('authRequired', {
      url: '/authrequired',
      templateUrl: '/states/authRequired.html'
    });

  $urlRouterProvider.otherwise('/');

}


MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function AuthCatcher($rootScope, $state) { //auth catcher if authotrised to view the page you can see it

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    if (error === 'AUTH_REQUIRED') {
      $state.go('auth-required');
    }
  });
}
AuthCatcher.$inject = ['$rootScope', '$scope'];




angular
  .module('FamilyTreeApp', ['ui.router', 'firebase'])
  // .constant('API_URL', 'http://localhost:3000')
  .config(MainRouter)
  .run(AuthCatcher);
