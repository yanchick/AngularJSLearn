var app = angular.module('app', ['ngTouch', 'ui.grid','leaflet-directive']);

app.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {	

  $scope.go = function() {
	  $http({
		  method: 'GET',
		  url: 'http://10.184.5.68:1887/zhat/get_utc'
		}).then(function successCallback(response) {
			a =  angular.fromJson(response);
			 $scope.name =  a.data.ServerUTC;
		    // this callback will be called asynchronously
		    // when the response is available
		  }, function errorCallback(response) {
			  $scope.name = 'clicked';
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });

	    
	    
	    $scope.myData = [
	                     {
	                         "firstName": "Cox",
	                         "lastName": "Carney",
	                         "company": "Enormo",
	                         "employed": true
	                     },
	                     {
	                         "firstName": "Lorммсвысаraine",
	                         "lastName": "Wise",
	                         "company": "Comveyer",
	                         "employed": false
	                     },
	                     {
	                         "firstName": "Nancy",
	                         "lastName": "Waters",
	                         "company": "Fuelton",
	                         "employed": false
	                     }
	                 ];
	  };
  
}]);