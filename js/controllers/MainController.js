app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
  	// debugger
  	// console.log("data: " + data.forecastday);
  	// console.log("forecast: " + forecast.forecastday);
    $scope.tenDay = data;
  });
}]);
