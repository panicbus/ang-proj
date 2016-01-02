var app = angular.module('ForecastApp', []);

function startTime(){
	var today, h, m, s;
	today = new Date();
	h = today.getHours() % 12 || 12;
	m = today.getMinutes();
	s = today.getSeconds();

	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);

	document.getElementById('clock').innerHTML = h + " " + m + " " + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}




