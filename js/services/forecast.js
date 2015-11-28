app.factory('forecast', ['$http', function($http) {
	// var pendingTask;
 //  console.log("$scope.search: " + $scope.search);

  // if ($scope.search === undefined) {
  // 	$scope.search = "San_Francisco";
  // 	console.log("boom " + $scope.search);
  // }

  // function fetch() {
  // 	$http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/CA/' + $scope.search + '.json')
  // 		.success(function(data){
  // 			$scope.details = data;
  // 		});
  // }

  // this part workss
  return {
  	search: function(keywords) {
	  	return $http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/CA/San_Francisco.json')
		    .success(function(data) {s
		      return data;
		    })
	   	}
		}

}]);

