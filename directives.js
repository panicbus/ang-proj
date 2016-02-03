app.directive('weatherReport', function(){ // weatherReport is normalized to weather-report in HTML
  return {
    restrict: 'EA', // restrict to elements (not attrs)
    templateUrl: 'directiveTemplates/weatherReport.html',
    replace: false, // true to remove the custom directive container fr the HTML
    scope: {
      weatherDate: '=', // isoloating these as text so the won't be corrupted by other things - it's an object not just text so, =
      convertToInteger: '&', // it's a function so, &
      convertToDate: '&',
      dateFormat: '@' // the date is just a string, so text or @
    }
  }
})
