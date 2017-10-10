'use strict';

/**
 * @ngdoc function
 * @name tvScheduleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tvScheduleApp
 */
angular.module('tvScheduleApp')
.controller('ScheduleController', function($scope,Schedule){
	
 $scope.today = function() {
    $scope.dt = new Date().toISOString().slice(0, 10);
    console.log('today: ' + $scope.dt);
  };
  
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

 

  
	$scope.$watch('dt', function(){
		console.log($scope.dt);
    var dt = new Date($scope.dt);
		var d = $scope.pad(dt.getDate(), 2);
		var m = $scope.pad(dt.getMonth()+1,2);
		var y = dt.getFullYear();
  
    $scope.date = d+'-'+m+'-'+y;
		console.log($scope.date);
		$scope.channels = Schedule.query({date:$scope.date});
  console.log($scope.dt);
	});

	$scope.pad = function(n, width, z) {
  		z = z || '0';
  		n = n + '';
  		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	};

 
	 
});

  