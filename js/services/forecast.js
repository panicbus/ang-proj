app.factory('forecast', ['$http', function($http) {
	// var pendingTask;
  // console.log("$scope.search: " + $scope.search);

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
		  console.log('keywords from the factory: ' + keywords);
		  console.log('keywords ' + keywords);
	  	return $http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/CA/' + keywords + '.json')
		    .success(function(data) {
		      return data;
		    })
	   	}
		}

}]);

