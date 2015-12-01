function getLocation(position) {
  navigator.geolocation.getCurrentPosition(getLocation);
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  var $latlng = lat + "," + lng;

  console.log($latlng);
	// if (navigator.geolocation) {
 //      navigator.geolocation.getCurrentPosition(showPosition);
 //  } else {
 //      x.innerHTML = "Geolocation is not supported by this browser.";
 //  }
}



  function showPosition(position) {
			var msgBox = document.getElementById("locationErrorMsg");

	    msgBox.innerHTML = "Latitude: " + position.coords.latitude +
	    "<br>Longitude: " + position.coords.longitude;
	}


	// 	navigator.geolocation.getCurrentPosition(function(position){
	// 	//check if user has geo feature
	// 	// if (navigator.geolocation) {

	// 		//get position
	// 		var lat = position.coords.latitude;
	//     var lon = position.coords.longitude;
	//     console.log(position.coords.latitude, position.coords.longitude);

	// 		    console.log('lat: ' + lat + ', long: ' + lon);
	// 		// alert('showPosition has run')
	// 		msgBox.innerHTML = "Latitude: " + position.coords.latitude +
	//     "<br>Longitude: " + position.coords.longitude;
	// 	// }
	// 	// //case the users browser doesn't support geolocations
	// 	// else {
	// 	// 	alert("Your browser doesn't support geolocations, please consider downloading Google Chrome");
	// 	// }
	// 	});
	// }








// 	// if (navigator.geolocation) {
//   		console.log(navigator.geolocation.getCurrentPosition(showPosition))
//       navigator.geolocation.getCurrentPosition(showPosition);
//   // } else {
//       // msgBox.innerHTML = "Geolocation is not supported by this browser.";
//   // }


// 	function showPosition(position) {
// 			// showError();
// 			alert('showPosition has run')
// 			msgBox.innerHTML = "Latitude: " + position.coords.latitude +
// 	    "<br>Longitude: " + position.coords.longitude;
// 	}

// }

// //////
// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             msgBox.innerHTML = "User denied the request for Geolocation."
//             break;
//         case error.POSITION_UNAVAILABLE:
//             msgBox.innerHTML = "Location information is unavailable."
//             break;
//         case error.TIMEOUT:
//             msgBox.innerHTML = "The request to get user location timed out."
//             break;
//         case error.UNKNOWN_ERROR:
//             msgBox.innerHTML = "An unknown error occurred."
//             break;
//     }
