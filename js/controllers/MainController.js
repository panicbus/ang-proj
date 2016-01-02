// MANUAL LOCATION SEARCH
app.controller('ForecastController', function($scope, forecast, $http) {
	$scope.search = function(keywords) {
		// get the longform location from GMaps to display
		$http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + keywords + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
      .success(function(data){
        $scope.resultsSearch = data.results;
    });
    // then get the forecast from WU
		$http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/' + keywords + '.json')
	    .success(function(data) {
	      $scope.response = data.response;
	      console.log("the response: " + $scope.response);
	      // limit the ng-repeat to 1
	      $scope.quantity = 1;
				$scope.tenDaySearch = data;
	      console.log("the tenDaySearch: " + $scope.tenDaySearch);
    })
	}
});

// AUTO LOCATION
app.controller('MainCtrl', function($scope, $http) {
	$scope.dropZip = function() {
		// get the location from the HTML navigator
		navigator.geolocation.getCurrentPosition(function(pos) {
      var latlng = pos.coords.latitude +","+ pos.coords.longitude;

			$http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
        .success(function(data){
          $scope.results = data.results;
          zipcode = data.results[0].address_components[7].long_name;

				// use the GMaps zipcode from above for the WU API call
		  	$http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/' + zipcode + '.json')
			    .success(function(data) {
			      $scope.response = data.response;
			      console.log($scope.response);
			      // limit the ng-repeat to 1
			      $scope.quantity = 5;
						$scope.tenDayAuto = data;
		    })
      });

    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });

 	}
});


app.controller('LocationController', function($scope, $http) {
	$scope.getLocation = function() {
		// get the location from the HTML navigator
		navigator.geolocation.getCurrentPosition(function(pos) {
      var latlng = pos.coords.latitude +","+ pos.coords.longitude;

			$http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlng + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
        .success(function(data){
          $scope.results = data.results;
		      $scope.quantity = 1;
      });

    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });

 	}
});



