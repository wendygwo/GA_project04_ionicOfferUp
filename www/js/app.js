// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.goods', {
    url: '/goods',
    views: {
      'tab-goods': {
        templateUrl: 'templates/tab-goods.html',
        controller: 'GoodsCtrl'
      }
    }
  })

  .state('tab.good-detail', {
    url: '/goods/:goodId',
    views: {
      'tab-goods': {
        templateUrl: 'templates/tab-good-detail.html',
        controller: 'GoodDetailCtrl'
      }
    }
  })



  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
    url: '/friends',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friends.html',
        controller: 'FriendsCtrl'
      }
    }
  })
  .state('tab.friend-detail', {
    url: '/friends/:friendId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friend-detail.html',
        controller: 'FriendDetailCtrl'
      }
    }
  })
  .state('tab.friend-detail-good', {
    url: '/friends/:friendId/:goodId',
    views: {
      'tab-friends': {
        templateUrl: 'templates/tab-friend-detail-good.html',
        controller: 'FriendDetailGoodCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  // This is also the line that tells you which view to go to by default, when the app is first opened
  $urlRouterProvider.otherwise('/tab/friends');

});
