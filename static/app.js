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

	  
	  $http({
		  method: 'POST',
		  url: 'http://10.184.5.68:1887/zhat/GetEmplDepart'
		}).then(function successCallback(response) {
			a =  angular.fromJson(response);
			 $scope.myData  =  a.data.RefEmplDepart;
		    // this callback will be called asynchronously
		    // when the response is available
		  }, function errorCallback(response) {
			  $scope.name = 'clicked';
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
	  
	  angular.extend($scope, {
	        cairo: {
	            lat: 30.05,
	            lng: 31.25,
	            zoom: 10
	        },
	        tiles: {
	            url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	        },
	        defaults: {
	            scrollWheelZoom: false
	        }
	    });
	   $scope.$watch("cairo.zoom", function(zoom) {
	        $scope.tiles.url = (zoom > 12) ? "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	                : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
	    });
	  
	  };
  
}]);