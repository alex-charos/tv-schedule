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
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };
 

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
	$scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  
	$scope.$watch('dt', function(){
		console.log($scope.dt);
		var d = $scope.pad($scope.dt.getDate(), 2);
		var m = $scope.pad($scope.dt.getMonth()+1,2);
		var y = $scope.dt.getFullYear();

		$scope.date = y+''+m+''+d;
		console.log($scope.date);
		$scope.channels = Schedule.query({date:$scope.date});

	});

	$scope.pad = function(n, width, z) {
  		z = z || '0';
  		n = n + '';
  		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	};



  	$scope.format = 'dd-MMMM-yyyy';







	
	
	 	
	 
});

  