// app.factory('forecast', ['$http', function($http) {

// 	// function getLocation(position) {
// 	//   navigator.geolocation.getCurrentPosition(getLocation);
// 	//   var lat = position.coords.latitude;
// 	//   var lng = position.coords.longitude;
// 	//   var $latlng = lat + "," + lng;

// 	//   console.log('the latlng from zipFinder.js: ' + $latlng);
// 	// }


// 			alert('the zipfinder has run')
// 	return {
// 		function getZip(zipFinder) {
// 		  // console.log('zip from the factory: ' + zipFinder);
// 			return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + $latlng + '&key=AIzaSyC4Ci51DjN4v2KeWjPZECP40QOBC3iXpp8')
// 			.success(function(data){
// 				// console.log("the DATA " + data);
// 				return data;
// 			})
// 		}
// 	// }
// }]);