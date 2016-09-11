console.log("im not crazy");
//naming our angular app
var app = angular.module("ngWittily", ["firebase"]);

//Creating controller
app.controller("ScreenCtrl", ["$scope", "$firebaseObject", function($scope,  $firebaseArray)
{
    var ref = new Firebase("https://letsdebate-acb88.firebaseio.com/topics");
    // download the data into a local object
    var syncArray = $firebaseArray(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncArray.$bindTo($scope, "data");


    $scope.affirmScore = 0;
    $scope.negateScore = 0;

    $scope.negAddOne = function() {
      $scope.negateScore++;
    }

    $scope.affirmAddOne = function() {
      $scope.affirmScore++;
    }

    $scope.showDetails = function(topicId) {
      $scope.queriedObject = $scope.data[topicId];
    }

    // $scope.arguments = $scope.data.topics.arguments
    // $scope.arguments = [
    //   {
    //     topic_id: $scope.articles[0].id,
    //     id: 1,
    //     pic: 'IMG_8303.jpg',
    //     argument: 'Jigglypuff',
    //     affirm: true
    //   },
    //   {
    //     topic_id: $scope.articles[0].id,
    //     id: 2,
    //     pic: 'IMG_8303.jpg',
    //     argument: 'Pikachu',
    //     affirm: false
    //   },
    //   {
    //     topic_id: $scope.articles[0].id,
    //     id: 3,
    //     pic: 'IMG_8303.jpg',
    //     argument: 'Bulbasaur',
    //     affirm: true
    //   },
    //   {
    //     topic_id: $scope.articles[1].id,
    //     id: 4,
    //     pic: 'IMG_8304.jpg',
    //     argument: 'Charmander',
    //     affirm: false
    //   },
    //   {
    //     topic_id: $scope.articles[1].id,
    //     id: 5,
    //     pic: 'IMG_8304.jpg',
    //     argument: 'who',
    //     affirm: false
    //   },
    //   {
    //     topic_id: $scope.articles[1].id,
    //     id: 6,
    //     pic: 'IMG_8303.jpg',
    //     argument: 'what',
    //     affirm: true
    //   },
    // ]

}]);

// {
// affirmChats :
// [
//   {
//     id: 1,
//     pic: 'IMG_8303.jpg',
//     argument: 'Jigglypuff'
//   },
//   {
//     id: 3,
//     pic: 'IMG_8303.jpg',
//     argument: 'Pikachu'
//   }
// ],
// negateChats :
// [
//   {
//     id: 2,
//     pic: 'IMG_8304.jpg',
//     argument: 'Pikachu'
//   },
//   {
//     id: 4,
//     pic: 'IMG_8304.jpg',
//     argument: 'Pikachu'
//   }
// ]
// }
