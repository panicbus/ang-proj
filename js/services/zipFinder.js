app.factory('zipFinder', ['$http', function($http){
	alert("zipFinder is hit")


	return {
		search: function(zipFinder) {
		  console.log('zip from the factory: ' + zipFinder);
			return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $latlng + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
			.success(function(data){
				console.log(data);
				return data;
			})
		}
	}
}]);