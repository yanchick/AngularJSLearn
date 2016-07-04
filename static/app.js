var app = angular.module('app', ['ui.grid','leaflet-directive', 'ui.grid.edit', 'ui.grid.cellNav']);

app.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {	

  $scope.BtnClick = function() {
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
	  };
  
}]);