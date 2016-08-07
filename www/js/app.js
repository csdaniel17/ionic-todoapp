// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('TodoCtrl', function($scope, $ionicModal) {
  // init the modal
  $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function(modal) {
    $scope.modal = modal;
  });

  // open modal
  $scope.openModal = function() {
    console.log('hello');
    $scope.modal.show();
  };

  // close modal
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // clean up
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  // add new items
  $scope.addTask = function(data) {
    // push new task to array
    $scope.items.push({
      task: data.newTask,
      status: 'not done'
    });
    // set to blank to not duplicate any task
    data.newTask = "";
    $scope.closeModal();
  };

  $scope.items = [{
    task: 'learn ionic',
    status: 'not done'
  },
  {
    task: 'clean room',
    status: 'not done'
  }];
});
