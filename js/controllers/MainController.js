app.controller('ForecastController', ['$scope', 'forecast', function($scope, forecast) {
	$scope.search = function(){
		forecast.search($scope.keywords).then(function(response){
			$scope.response = response.data;
			console.log("$scope.keywords from the controller: " + $scope.keywords);
			console.log("response.data " + response.data);
			$scope.tenDay = response.data;
		});
	}
}]);

app.controller('MainCtrl', function($scope, $http) {
  console.log('MainCtrl controller has run');
  // $scope.results = [];

  $scope.getMyAddr = function() {
  	console.log("getMyAddr has run")
    navigator.geolocation.getCurrentPosition(function(pos) {
      var latlng = pos.coords.latitude +","+ pos.coords.longitude;
      console.log('geolocation: '+latlng);
			$http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
        .success(function(data){
          console.log('geocode: ', data);
          $scope.results = data.results;
          zipcode = data.results[0].address_components[7].long_name;
          $scope.quantity = 1;
          console.log("THE ZIP IS: " + zipcode );
        });
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  }
  // $scope.zip = function(zip){
  // 	console.log('function zip has run');
  // 	zipCode.zip($scope.zip).then(function(response){
  // 		$scope.zipCode = response.data;
  // 	})
  // 	$scope.zip = zipCode;
  // }

});