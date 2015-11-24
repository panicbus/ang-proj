app.factory('forecast', ['$http', function($http) {
  return $http.get('http://api.wunderground.com/api/2e91cf72317737fc/forecast10day/q/CA/San_Francisco.json')
  // return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
    .success(function(data) {
    	// debugger
      return data;
    })
    .error(function(err) {
      return err;
		});
}]);

