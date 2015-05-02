angular.module('refinedData', ['ui.bootstrap','ngRoute']);
angular.module('refinedData').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;

  var slides = $scope.slides = [
    {
      image: 'images/1.PNG',
      text: 'eLearning'
    },
    {
        image: 'images/2.PNG',
        text: 'Training' 
    },{
        image: 'images/3.PNG',
        text: 'Moodle' 
    },{
        image: 'images/4.PNG',
        text: 'Refined risk' 
    } ];

});

 angular.module('refinedData').controller('listOfProduct',['$scope','$http', function ($scope,$http) {
 
$http.get('programs/programs.json').success(function(data){
  $scope.programs = data;
  });
}]);


 // angular.module('refinedData').controller('detailOfProduct', ['$scope', '$routeParams',
 //  function($scope, $routeParams) {
 //    $scope.programId = $routeParams.programId;
 //  }]);


 angular.module('refinedData').controller('detailOfProduct', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('programs/' + $routeParams.programId + '.json').success(function(data) {
      $scope.program = data;
          // $scope.programId = $routeParams.programId;

    });
  }]);


 angular.module('refinedData').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/programs', {
        templateUrl: 'partials/program-list.html',
        controller: 'listOfProduct'
      }).
      when('/programs/:programId', {
        templateUrl: 'partials/program-detail.html',
        controller: 'detailOfProduct'
      }).
      otherwise({
        redirectTo: '/programs'
      });
  }]);