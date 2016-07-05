var app = angular.module('app', ['ui.grid','leaflet-directive', 'ui.grid.edit', 'ui.grid.cellNav','ngDialog']);

app.controller('MainCtrl',  ['$scope','$http', 'ngDialog', function ($scope,$http, ngDialog) {
	
	
	$scope.$on('leafletDirectiveMap.click',function(event, args){
		$scope.llat = args.leafletEvent.latlng.lat;
		ngDialog.open({ template: 'templateId',
			className: 'ngdialog-theme-default custom-width-300',
		    scope: $scope
		});
		
	    });
	

}]);
