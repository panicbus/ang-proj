app.controller('ForecastController', ['$scope', 'forecast', function($scope, forecast) {
	$scope.search = function(){
		forecast.search($scope.keywords).then(function(response){
			$scope.response = response.data;
			console.log("$scope.response " + response.data);
			$scope.tenDay = response.data;
		});
	}
}]);

