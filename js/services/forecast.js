app.factory('forecast', ['$http', function($http) {
  return $http.get('http://api.wunderground.com/api/Your_Key/forecast10day/q/CA/San_Francisco.json')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
		});
}]);