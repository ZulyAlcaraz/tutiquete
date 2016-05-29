// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false).text(' ');
  $stateProvider

    // Página inicial //
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'AppCtrl'
    })

    // Registrarse //
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'AppCtrl'
    })

    // Ingresar //
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'AppCtrl'
    })

    // Comprar tiquete //
    .state('buy-ticket', {
      url: '/buy-ticket',
      templateUrl: 'templates/buy-ticket.html',
      controller: 'AppCtrl'
    })

    // Olvidó contraseña //
    .state('forgot-password', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html',
      controller: 'AppCtrl'
    })

    // Cambiar contraseña //
    .state('change-password', {
      url: '/change-password',
      templateUrl: 'templates/change-password.html',
      controller: 'AppCtrl'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
});
