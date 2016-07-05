var app = angular.module('app', ['ui.grid','leaflet-directive', 'ui.grid.edit', 'ui.grid.cellNav','ngDialog']);

app.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {
	
	$scope.$on('leafletDirectiveMap.click', function(event, args){
		    ngDialog.open({ template: 'templateId' });	       
	    });
	
  
}]);