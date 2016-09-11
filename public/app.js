console.log("im not crazy");
//naming our angular app
var app = angular.module("ngWittily", ["firebase"]);

//Creating controller
app.controller("ScreenCtrl", ["$scope", "$firebaseObject", "$window", function($scope,  $firebaseArray, $window)
{

    var ref = new Firebase("https://letsdebate-acb88.firebaseio.com/topics");
    // download the data into a local object
    var syncArray = $firebaseArray(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncArray.$bindTo($scope, "data");

    $scope.showDetails = function(topicId) {
      $('#chatScreen').css('display', 'block');
      $('.articleScreen').css('transform', 'translateX(0%)');
      $scope.queriedObject = $scope.data[topicId];
      setInterval(function () {
         console.log($scope.queriedObject.id);
         $('#'+$scope.queriedObject.id).click();
       }, 1000);
    }


    $scope.addAgreeLikes = function(argumentId) {

      $scope.queriedObject.arguments[argumentId].likes++;
      $scope.queriedObject.agree_score++;
      // $scope.queriedObject.arguments[argumentId].likes = $scope.queriedObject.arguments[argumentId].likes;
      // $scope.queriedObject.agree_score = $scope.queriedObject.agree_score
    }

    $scope.addDisagreeLikes = function(argumentId) {
      $scope.queriedObject.arguments[argumentId].likes++;
      $scope.queriedObject.disagree_score++;
      // $scope.queriedObject.arguments[argumentId].likes = $scope.queriedObject.arguments[argumentId].likes
      // $scope.queriedObject.disagree_score = $scope.queriedObject.disagree_score;
    }


}]);


app.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});
