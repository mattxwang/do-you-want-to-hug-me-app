
angular.module('dywthm', ['ionic', 'ngCordova', 'dywthm.controllers', 'dywthm.services', 'highcharts-ng'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('login', {
    url: '/l',
    abstract: true,
    templateUrl: 'templates/login-menu.html'
  })

  .state('login.login', {
    url: '/login',
    views: {
      'loginContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('app.add', {
      url: '/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/add.html'
        }
      }
    })
    .state('app.plushes', {
      url: '/plushes',
      views: {
        'menuContent': {
          templateUrl: 'templates/plushes.html',
          controller: 'PlushesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/plushes/:plushId',
    views: {
      'menuContent': {
        templateUrl: 'templates/plush.html',
        controller: 'PlushCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/l/login');
});
